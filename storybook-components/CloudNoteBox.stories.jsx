import React from 'react';
import CloudNoteBox from './CloudNoteBox';

export default {
  title: 'Components/CloudNoteBox',
  component: CloudNoteBox,
};

export const Default = () => (
  <CloudNoteBox>
    <p>This is a note inside a cloud box component.</p>
  </CloudNoteBox>
);
