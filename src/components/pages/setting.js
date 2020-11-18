/* eslint-disable no-unused-vars */
import React, {component} from 'react';
import {SettingsPane, SettingsPage, SettingsContent, SettingsMenu} from 'react-settings-pane';

import { BrowserRouter as Route } from 'react-router-dom';
import HomePage from './homePage';

function Setting() {
    let settings = {
        'mysettings.general.name': 'FirstName LastName',
        'mysettings.general.color-theme': 'purple',
        'mysettings.general.email': 'email@gmail.com',
        'mysettings.general.picture': 'earth',
        'mysettings.profile.firstname': 'FirstName',
        'mysettings.profile.lastname': 'LastName',
      };
      const menu = [
        {
          title: 'General',          // Title that is displayed as text in the menu
          url: '/settings/general'  // Identifier (url-slug)
        },
        {
          title: 'Profile',
          url: '/settings/profile'
        },
        {
          title: "Notifications",
          url: "/settings/notifications"
        },
        {
          title: "Language",
          url: "/settings/language"
        },
        {
          title: "About",
          url: "/settings/about"
        }
      ];
      
      const dynamicOptionsForProfilePage = [
        {
          key: 'mysettings.general.email',
          label: 'E-Mail address',
          type: 'text',
        },
        {
          key: 'mysettings.general.password',
          label: 'Password',
          type: 'password',
        }
      ];
      
       // Save settings after close
 const leavePaneHandler = (wasSaved, newSettings, oldSettings) => {
    // "wasSaved" indicates wheather the pane was just closed or the save button was clicked.
  
    if (wasSaved && newSettings !== oldSettings) {
      // do something with the settings, e.g. save via ajax.
    }
  };
  const settingsChanged = (changedSettings)=> {
    // this is triggered onChange of the inputs
  };      
  return (
    <SettingsPane items={menu} index="/settings/general" settings={settings} onPaneLeave={leavePaneHandler} >
      <SettingsMenu headline="General Settings" />
      <SettingsContent closeButtonClass="secondary" saveButtonClass="primary" header={true}>
        <SettingsPage handler="/settings/general">
           <fieldset className="form-group">
             <label for="profileName">Name: </label>
             <input type="text" className="form-control" name="mysettings.general.name" placeholder="Name" id="general.ame" onChange={settingsChanged} defaultValue={settings['mysettings.general.name']} />
           </fieldset>
           <fieldset className="form-group">
             <label for="profileName">Email: </label>
             <input type="text" className="form-control" name="mysettings.general.email" placeholder="email" id="general.ame" onChange={settingsChanged} defaultValue={settings['mysettings.general.email']} />
           </fieldset>
           <fieldset className="form-group">
             <label for="profileColor">Color-Theme: </label>
             <select name="mysettings.general.color-theme" id="profileColor" className="form-control" defaultValue={settings['mysettings.general.color-theme']}>
               <option value="blue">Blue</option>
               <option value="red">Red</option>
               <option value="purple">Purple</option>
               <option value="orange">Orange</option>
             </select>
           </fieldset>
        </SettingsPage>
        <SettingsPage handler="/settings/profile" options={dynamicOptionsForProfilePage} onPaneLeave={leavePaneHandler}>
        </SettingsPage>
        <SettingsPage handler="/settings/notifications" onPaneLeave={leavePaneHandler} />
        <SettingsPage handler="/settings/language"  onPaneLeave={leavePaneHandler}/>
        <SettingsPage handler="/settings/about"  onPaneLeave={leavePaneHandler}/>
      </SettingsContent>
    </SettingsPane>
  );
}

export default Setting;
