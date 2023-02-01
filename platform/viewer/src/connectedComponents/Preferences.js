import React from 'react';
import { useState } from 'react';

export const Preferences = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <React.Fragment>
      <button
        className="btn btn-primary"
        type="button"
        onClick={() => setIsOpen(true)}
      >
        Open user preferences
      </button>
      <UserPreferencesModal
        {...state}
        onCancel={() => setIsOpen(false)}
        onSave={() => alert('on save')}
        onResetToDefaults={() => alert('on reset')}
      />
    </React.Fragment>
  );
};
