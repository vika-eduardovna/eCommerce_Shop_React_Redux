import React from 'react';
import GoogleMapReact from 'google-map-react';
import { REACT_APP_GOOGLE_KEY } from './google_API';


const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function GoogleMapsContainer() {

    return (
        <div style={{ height: '500px', width: '500px' }} className='wrapper'>
            <GoogleMapReact
                bootstrapURLKeys={REACT_APP_GOOGLE_KEY}
                defaultCenter={{ lat: 52.372792, lng: 4.893606 }}
                defaultZoom={18}
                yesIWantToUseGoogleMapApiInternals={true}
            >
                <AnyReactComponent
                    lat={52.372792}
                    lng={4.893606}
                    text='Our office is here'
                />
            </GoogleMapReact>
        </div>
    );
}
