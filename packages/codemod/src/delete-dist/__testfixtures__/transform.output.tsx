import React from 'react';
import { Alert as CoreAlert } from '@balafla/core-components-alert/esm';
import { Button } from '@balafla/core-components-button/cssm';
import { Calendar, CalendarMobile } from '@balafla/core-components-calendar/modern';
import { Modal } from '@balafla/core-components-modal/esm';
import { Plate } from '@balafla/core-components-plate';

import { OtherComponent } from '../OtherComponent';

export const Component = () => {
    const [open, setOpen] = React.useState(false);

    return (
        <div>
            <Modal open={open}>
                <Modal.Content>
                    <Calendar />
                    <CalendarMobile />
                    <CoreAlert>Alert!!!</CoreAlert>
                    <Plate>Plate</Plate>
                    <OtherComponent />
                </Modal.Content>
            </Modal>

            <Button onClick={() => setOpen()}>Open modal</Button>
        </div>
    );
};
