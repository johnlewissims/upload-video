import app from 'flarum/app';
import {extend} from 'flarum/extend';
import TextEditor from 'flarum/components/TextEditor';
import UploadButton from './components/UploadButton';

app.initializers.add('ejin/upload-video', () => {

  extend(TextEditor.prototype, 'controlItems', function (items) {
      items.add('ejin-video-upload',
        <UploadButton textArea={this} />
      );
  });
});
