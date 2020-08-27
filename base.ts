import { FireMixin } from '@pwrs/mixins/fire';
import { LitElement } from 'lit-element';
import { bound } from './bound-decorator';
import type * as L from 'leaflet';

type LeafletFeature =
  | null
  | L.Circle
  | L.GeoJSON
  | L.Marker
  | L.LayerGroup
  | L.Polyline
  | L.Polygon
  | L.Popup
  | L.Point;

export class LeafletBase extends FireMixin(LitElement) {
  _mutationObserver?: MutationObserver;

  feature: LeafletFeature;

  _container: L.Map | L.LayerGroup;

  get container(): L.Map | L.LayerGroup {
    return this._container;
  }

  set container(v: L.Map | L.LayerGroup) {
    this._container = v;
  }

  @bound onLeafletEvent(e: L.LeafletEvent): void {
    this.fire(e.type, e);
  }
}
