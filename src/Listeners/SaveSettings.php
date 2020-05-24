<?php

namespace Ejin\UploadVideo\Listeners;

use Flarum\Api\Event\Serializing;
use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Settings\SettingsRepositoryInterface;

class SaveSettings
{
    protected $settings;

    public function __construct(SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
    }

    public function handle(Serializing $event)
    {
        if ($event->isSerializer(ForumSerializer::class)) {
            $event->attributes['upload-video.imgur-endpoint'] = $this->settings->get('upload-video.imgur-endpoint');
            $event->attributes['upload-video.client-id'] = $this->settings->get('upload-video.client-id');
            $event->attributes['upload-video.max-file-size'] = $this->settings->get('upload-video.max-file-size');
        }
    }
}
