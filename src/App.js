import logo from './logo.svg';
import './App.css';
import {Map, TileLayer, Marker, Popup, Pane} from 'react-leaflet';

function App() {
  return (
    <div className="App">
      <Map style={{height: 400}} center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Pane name="foo-bar">
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </Pane>
      </Map>
    </div>
  );
}

export default App;
