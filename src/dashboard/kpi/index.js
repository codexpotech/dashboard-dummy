import React, {useState} from 'react';
import {useEffect} from "react";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import AddNewPanelModal from "./addNewPanelModal";
import {Button} from "bootstrap-4-react";
import DnDList from "./DnDList";

export function DashboardKpiApp() {

    const availablePanels = [
        {
            'key': 'payments',// ToDo: see api/dashboard for return.
            'forecast': true, // ToDo: The forecast has 4 keys, 'current', 'last', 'currentForecast', 'lastForecast'
            'model': 'valueModel' // ToDo: each key contains a value model in this case. ValueModel contains two keys, 'count' and 'value'
        },
        {
            // ToDo: This endpoints returns a normal model, no forecast. In this case return has two keys: 'current', 'last'
            'key': 'orders', // ToDo: see api/dashboard for return.
            'model': 'valueModel' // ToDo: each key contains a value model in this case. ValueModel contains two keys, 'count' and 'value'
        },
        {
            // ToDo: This endpoints returns a normal model, no forecast. In this case return has two keys: 'current', 'last'
            'key': 'quote-consulting', // ToDo: see api/dashboard for return.
            'model': 'ratioModel' // ToDo: each key contains a ratio model in this case. RatioModel contains three keys, 'numerator', 'denominator', 'ratio'
        },
        {
            // ToDo: This endpoints returns a normal model, no forecast. In this case return has two keys: 'current', 'last'
            'key': 'quote-offer', // ToDo: see api/dashboard for return.
            'model': 'valueRatioModel' // ToDo: each key contains a ratio and value model in this case. RatioValueModel contains six keys.
        },
    ]

    // ToDo: implement a configuration mode. If Configuration mode is enabled users should be able to:
    // -- add new Panels
    // -- remove panels
    // -- configure panels (clicking on the cogwheel => display panel configuration popup)
    // -- depending one model, users should be able to select the proper key to display, f.e on valueModel users should be able to select count or value -> this will be saved in 'select' key, see below
    // -- if forecast, users should additionally be able to select, if they want to see 'current' or 'currentForecast',
    // -- configuration dialog should have fields for
    // -- -- 'label', simple text
    // -- -- 'width' => 1,2 or 3
    // -- -- 'format' => format can be 'plain', 'percent' or 'currency'

    // ToDo: generate panels array dynamically from user configuration
    const panels = [
        {
            key: '1', // key should be a auto generated guid
            panel: 'payments', // link to key from available panels
            model: 'valueModel', // from available panels
            format: 'currency', // from config dialog
            select: 'value', // from config dialog
            width: 2, // from config dialog
            label: 'Zahlungseingang' // from config dialog
        },
        {
            key: '2',
            panel: 'payments',
            model: 'valueModel',
            select: 'count',
            label: 'Zahlungen'
        },
        {
            key: '3',
            panel: 'payments',
            model: 'valueModel',
            format: 'currency',
            select: 'value',            //
            width: 2,
            label: 'ZE erwartet',
            forecast: true              // only available on forecastModel
        },
        {
            key: '4',
            panel: 'payments',
            model: 'valueModel',
            select: 'count',
            label: 'offene Zahlungen',
            forecast: true
        },
    ]

    const [editMode, setEditMode] = useState();

    useEffect(() => {
    },[])

    return (
      <>
          <div className="row mb-3" id="settings">
              <div className="col text-right">
                  <span className='my-auto mr-2'>
                  Configuration mode:
                  </span>
                  <BootstrapSwitchButton
                    checked={false}
                    onlabel='Enabled'
                    offlabel='Disabled'
                    width={100}
                    onChange={(checked) => setEditMode(checked)}
                  />
                  <Button className='ml-3' primary data-toggle="modal" data-target="#exampleModal">Add New Panel</Button>
              </div>
          </div>
          <AddNewPanelModal/>
          <DnDList panels={panels}/>
      </>

    );
}