import React, { useCallback, useContext } from 'react';

import { Circle } from '@alfalab/core-components/icon-view/circle';
import { Button } from '@alfalab/core-components-button';
import { Text } from '@alfalab/core-components-typography';
import { SoundCrossMIcon } from '@alfalab/icons-glyph/SoundCrossMIcon';
import { SoundMIcon } from '@alfalab/icons-glyph/SoundMIcon';

import { GalleryContext } from '../../context';
import { GALLERY_EVENTS, isVideo } from '../../utils';
import * as Buttons from '../buttons';

import styles from './index.module.css';

export const InfoBar = () => {
    const {
        getCurrentImage,
        mutedVideo,
        setMutedVideo,
        playingVideo,
        setPlayingVideo,
        getCurrentImageMeta,
    } = useContext(GalleryContext);

    const image = getCurrentImage();
    const meta = getCurrentImageMeta();

    const handleMuteVideo = useCallback(() => {
        const eventType = mutedVideo ? GALLERY_EVENTS.ON_UNMUTE : GALLERY_EVENTS.ON_MUTE;
        const customEvent = new CustomEvent(eventType, {
            detail: { player: meta?.player?.current },
        });

        dispatchEvent(customEvent);
        setMutedVideo(!mutedVideo);
    }, [meta?.player, mutedVideo, setMutedVideo]);

    const handlePlayVideo = useCallback(() => {
        setPlayingVideo(!playingVideo);
    }, [playingVideo, setPlayingVideo]);

    return (
        <section className={styles.infoWrapper}>
            {isVideo(image?.src) ? (
                <React.Fragment>
                    <Button
                        onClick={handleMuteVideo}
                        aria-label='Кнопка выключения звука'
                        view='ghost'
                        className={styles.muteButton}
                    >
                        <Circle
                            size={48}
                            className={styles.muteButton}
                            shapeClassName={styles.iconShape}
                        >
                            {mutedVideo ? (
                                <SoundMIcon className={styles.icon} />
                            ) : (
                                <SoundCrossMIcon className={styles.icon} />
                            )}
                        </Circle>
                    </Button>
                    {playingVideo ? (
                        <Buttons.Pause onClick={handlePlayVideo} className={styles.center} />
                    ) : (
                        <Buttons.Play onClick={handlePlayVideo} className={styles.center} />
                    )}
                </React.Fragment>
            ) : (
                <Text
                    className={styles.description}
                    tag='div'
                    view='component'
                    color='static-primary-light'
                >
                    {image?.name}
                </Text>
            )}
        </section>
    );
};
