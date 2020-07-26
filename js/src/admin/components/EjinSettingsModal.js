import SettingsModal from 'flarum/components/SettingsModal';

export default class EjinSettingsModal extends SettingsModal {
	className() {
		return 'EjinSettingsModal Modal--small';
	}

	title() {
		return 'Upload Video';
	}

	form() {
		return [
			<div className="Form-group">
				<label>Imgur Client ID</label>
				<input className="FormControl" bidi={this.setting('upload-video.client-id')}/>
			</div>,
      <div className="Form-group">
				<label>Imgur Endpoint</label>
				<input className="FormControl" bidi={this.setting('upload-video.imgur-endpoint')}/>
			</div>,
    <div className="Form-group">
    <label>Imgur proxy URL</label>
    <input className="FormControl"  bidi={this.setting('upload-video.imgur-viewpoint','https://i.imgur.com/')}/>
    </div>,
      <div className="Form-group">
				<label>Max File Size (MB)</label>
				<input className="FormControl" bidi={this.setting('upload-video.max-file-size')}/>
			</div>
		];
	}
}
