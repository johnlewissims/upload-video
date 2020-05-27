import Component from 'flarum/Component';
import LoadingIndicator from 'flarum/components/LoadingIndicator';
import ReplyComposer from 'flarum/components/ReplyComposer';
import EditPostComposer from 'flarum/components/EditPostComposer';
import Alert from 'flarum/components/Alert';
import icon from 'flarum/helpers/icon';
import app from 'flarum/app';

export default class UploadButton extends Component {
  init() {
    /**
     * Is the video being uploaded?
     *
     * @type {Boolean}
     */
    this.loading = false;
    this.error = false;
  }

  view() {
    // Loading Indicator
    let buttonIcon;
    if (this.loading) buttonIcon = LoadingIndicator.component({ className: 'Button-icon' });
    else if (this.error) buttonIcon = icon('fas fa-times red', { className: '' });
    else buttonIcon = icon('fas fa-video', { className: '' });

    return (
      <div className="Button" onclick={this.click.bind(this)}>
        {buttonIcon}
        <form>
          <input type="file" id="uploadVideo" onchange={this.upload.bind(this)}></input>
        </form>
      </div>
    );
  }

  /* Upload Button Pressed */

  click() {
    document.getElementById("uploadVideo").click();
  }

  /* File Selected */
  upload(input) {
    this.loading = true;
    // Get the file from the input field
    const data = new FormData();
    let file = document.getElementById("uploadVideo").files[0];
    let fileSize = Math.round((document.getElementById("uploadVideo").files[0].size/1000000));
    data.append('video', document.getElementById("uploadVideo").files[0]);

    if(fileSize > app.forum.attribute('upload-video.max-file-size')) {
      this.loading = false;
      this.error = true;
      app.alerts.show(this.successAlert = new Alert({
        type: 'error',
        children: 'Video must be smaller than 40MB.',
      }));
    } else {
      // Send the file to imgur
      this.error = false;
      $.ajax({
        url: app.forum.attribute('upload-video.imgur-endpoint'),
        headers: {
            'Authorization': 'Client-ID ' + app.forum.attribute('upload-video.client-id'),
            'Accept': 'application/json',
            'Cache-Control': null,
            'X-Requested-With': null
        },
        type: 'POST',
        data: data,
        cache: false,
        contentType: false,
        processData: false,
        mimeType: 'multipart/form-data',
        success: this.success.bind(this),
        error: function(response) {
          this.loading = false;
          this.error = true;
          app.alerts.show(this.successAlert = new Alert({
            type: 'error',
            children: 'An error occcured while uploading to imgur. Please try again later.',
          }));
        }
      });
    }
  }

  /* File Processed, Return Link */
  success(response) {
    let returned = JSON.parse(response)
    this.loading = false;
    let url = returned.data.link;
    let id = returned.data.id;
    let preview = 'https://i.imgur.com/'+ id +'l.jpg';
    let bbCode = '[IMGUR-VIDEO]'+ url +', '+ preview +'[/IMGUR-VIDEO]';
    this.props.textArea.insertAtCursor(bbCode);
  }

  // checkStatus(imgId) {
  //   // Check and see if the video has been processed
  //   $.ajax({
  //     url: '',
  //     headers: {
  //         'Authorization': 'Client-ID',
  //         'Accept': 'application/json',
  //         'Cache-Control': null,
  //         'X-Requested-With': null
  //     },
  //     type: 'GET',
  //     cache: false,
  //     contentType: false,
  //     processData: false,
  //     success: this.success.bind(this),
  //     error: this.error.bind(this)
  //   });
  //   console.log('Status checked!')
  // }
}
