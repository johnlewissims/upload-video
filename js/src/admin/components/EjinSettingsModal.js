import SettingsModal from 'flarum/components/SettingsModal';

export default class EjinSettingsModal extends SettingsModal {
	className() {
		return 'EjinSettingsModal Modal--small';
	}

	title() {
		return app.translator.trans('upload-video.admin.settings.title');
	}

	form() {
		return [
			<div className="Form-group">
				<label>Imgur Client ID</label>
				<input className="FormControl" bidi={this.setting('upload-video.client-id')}/>
			</div>,
      <div className="Form-group">
				<label>{app.translator.trans('upload-video.admin.settings.imgur-endpoint')}</label>
				<input className="FormControl" bidi={this.setting('upload-video.imgur-endpoint','https://api.imgur.com/3/upload')}/>
			</div>,
    <div className="Form-group">
    <label>{app.translator.trans('upload-video.admin.settings.proxy-URL')}</label>
    <input className="FormControl"  bidi={this.setting('upload-video.imgur-viewpoint','https://i.imgur.com/')}/>
    </div>,
      <div className="Form-group">
				<label>{app.translator.trans('upload-video.admin.settings.file-size')}</label>
				<input className="FormControl" bidi={this.setting('upload-video.max-file-size')}/>
			</div>
		];
	}
}
