<?php

/*
 * This file is part of ejin/upload-video.
 *
 * Copyright (c) 2020 John Lewis Sims.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Ejin\UploadVideo;

use Flarum\Extend;
use Ejin\UploadVideo\Providers\VideoProvider;
use Ejin\UploadVideo\Controllers\UploadVideoController;
use Flarum\Api\Event\Serializing;
use s9e\TextFormatter\Configurator;
use Illuminate\Contracts\Events\Dispatcher;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/resources/less/forum.less'),
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/resources/less/admin.less'),
    new Extend\Locales(__DIR__ . '/resources/locale'),
    function (Dispatcher $dispatcher) {
        $dispatcher->listen(Serializing::class, Listeners\SaveSettings::class);
    },
    (new Extend\Formatter)
    ->configure(function (Configurator $config) {
        $config->BBCodes->addCustom(
            '[IMGUR-VIDEO]{URL1}, {URL2}[/IMGUR-VIDEO]',
            '<video class="imgurVideo" controls><source src="{URL1}" type="video/mp4"><img src="{URL2}"></video>'
        );
    })
];
