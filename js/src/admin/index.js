import app from 'flarum/app';
import EjinSettingsModal from './components/EjinSettingsModal';

app.initializers.add('upload-video', () => {
	app.extensionSettings['ejin-upload-video'] = () => app.modal.show(new EjinSettingsModal());
});
