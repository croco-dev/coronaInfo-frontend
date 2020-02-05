/* eslint-disable */

declare namespace kakao.maps {
  // Core

  /**
   * @see [Circle](http://apis.map.daum.net/web/documentation/#Circle)
   */
  export class Circle implements kakao.maps.event.EventTarget {
    /**
     * 주어진 객체로 원을 생성한다.
     *
     * @param options
     */
    constructor(options: CircleOptions)

    /**
     * 지도에 원을 올린다.
     * null 을 지정하면 원을 제거한다.
     *
     * @param map
     */
    public setMap(map: Map | null): void

    /**
     * 원이 올라가있는 지도를 반환한다.
     */
    public getMap(): Map | null

    /**
     * 원의 옵션을 설정한다.
     */
    public setOptions(options: CircleOptions): void

    /**
     * 원의 중심 좌표를 지정한다.
     *
     * @param position
     */
    public setPosition(position: LatLng): void

    /**
     * 원 중심의 좌표를 반환한다.
     */
    public getPosition(): LatLng

    /**
     * 원의 반지름을 m(미터)단위로 지정한다.
     *
     * @param radius
     */
    public setRadius(radius: number): void

    /**
     * 원의 반지름을 반환한다.
     */
    public getRadius(): number

    /**
     * 원을 포함하는 최소의 사각형 영역을 구한다.
     */
    public getBounds(): LatLngBounds

    /**
     * 원의 z-index를 설정한다.
     *
     * @param zIndex
     */
    public setZIndex(zIndex: number): void

    /**
     * 원의 z-index를 반환한다.
     */
    public getZIndex(): number
  }

  export interface CircleOptions {
    /**
     * 중심 좌표
     */
    center: LatLng

    /**
     * #xxxxxx 형태의 채움 색 (기본값: ‘#F10000’)
     */
    fillColor?: string

    /**
     * 채움 불투명도 (0-1) (기본값: 0)
     */
    fillOpacity?: number

    /**
     * 미터 단위의 반지름
     */
    radius: number

    /**
     * 픽셀 단위의 선 두께 (기본값: 3)
     */
    strokeWeight?: number

    /**
     * #xxxxxx 형태의 선 색 (기본값: ‘#F10000’)
     */
    strokeColor?: string

    /**
     * 선 불투명도 (0-1) (기본값: 0.6)
     */
    strokeOpacity?: number

    /**
     * 선 스타일 (기본값: ‘solid’)
     */
    strokeStyle?: StrokeStyles

    /**
     * 원의 z-index 속성 값
     */
    zIndex?: number
  }

  /**
   * 클러스터 객체.
   * 클러스터링 된 마커들과 클러스터 오버레이의 정보를 가지고 있다.
   * 직접 선언은 불가능하며 MarkerClusterer 의 이벤트 핸들러의 인자로 인스턴스가 생성되어 넘어온다.
   */
  export interface Cluster {
    /**
     * 클러스터의 좌표를 반환한다.
     */
    getCenter(): LatLng

    /**
     * 클러스터의 영역을 반환한다.
     */
    getBounds(): LatLngBounds

    /**
     * 클러스터에 포함된 마커의 개수를 반환한다.
     */
    getSize(): number

    /**
     * 클러스터에 포함된 마커들을 배열로 반환한다.
     */
    getMarkers(): Marker[]

    /**
     * 클러스터 오버레이를 반환한다.
     * 리턴값은 CustomOverlay 이다.
     */
    getClusterMarker(): CustomOverlay
  }

  /**
   * @see [Coords](http://apis.map.daum.net/web/documentation/#Coords)
   */
  export class Coords {
    /**
     * Wcongnamul 좌표 정보를 가지고 있는 객체를 생성한다.
     *
     * @param x
     * @param y
     */
    constructor(x: number, y: number)

    /**
     * x 좌표를 반환한다.
     */
    public getX(): number

    /**
     * y 좌표를 반환한다.
     */
    public getY(): number

    /**
     * 객체가 가지고 있는 좌표와 같은 좌표를 가지고 있는 객체인지 비교한다.
     *
     * @param coords
     */
    public equals(coords: Coords): boolean

    /**
     * 객체가 가지고 있는 좌표를 문자열로 반환한다.
     */
    public toString(): string

    /**
     * 객체가 가지고 있는 좌표를 WGS84 좌표로 반환한다.
     */
    public toLatLng(): LatLng
  }

  /**
   * @see [CustomOverlay](http://apis.map.daum.net/web/documentation/#CustomOverlay)
   */
  export class CustomOverlay implements kakao.maps.event.EventTarget {
    /**
     * 주어진 객체로 커스텀 오버레이를 생성한다.
     * 지도 뿐만 아니라 로드뷰 위에도 올릴 수 있다.
     *
     * @param options
     */
    constructor(options: CustomOverlayOptions)

    /**
     * 지도 또는 로드뷰에 커스텀 오버레이를 올린다.
     * null 을 지정하면 오버레이를 제거한다.
     *
     * @param map
     */
    public setMap(map: Map | null /* | RoadView */): void

    /**
     * 커스텀 오버레이가 올라가있는 지도를 반환한다.
     */
    public getMap(): Map | null

    /**
     * 커스텀 오버레이의 좌표를 지정한다.
     * 로드뷰의 특정 시점에 고정하기 위해서 Viewpoint 객체를 사용할 수도 있다.
     * panoId를 지정한 Viewpoint 를 사용하면 panoId에 해당하는 로드뷰 위치에서만 보이게 된다.
     *
     * @param position
     */
    public setPosition(position: LatLng /* | ViewPoint */): void

    /**
     * 커스텀 오버레이의 좌표를 반환한다.
     */
    public getPosition(): LatLng

    /**
     * 커스텀 오버레이의 내용을 지정한다.
     * 엘리먼트 또는 HTML 문자열을 지정할 수 있다.
     *
     * @param content
     */
    public setContent(content: HTMLElement | string): void

    /**
     * 커스텀 오버레이의 내용을 지정했던 형태로 반환한다.
     */
    public getContent(): HTMLElement | string

    /**
     * 커스텀 오버레이의 표시 여부를 지정한다.
     *
     * @param visible
     */
    public setVisible(visible: boolean): void

    /**
     * 커스텀 오버레이의 표시 여부를 반환한다.
     */
    public getVisible(): boolean

    /**
     * 커스텀 오버레이의 z-index를 설정한다.
     *
     * @param zIndex
     */
    public setZIndex(zIndex: number): void

    /**
     * 커스텀 오버레이의 z-index를 반환한다.
     */
    public getZIndex(): number

    /**
     * 로드뷰상에서 커스텀 오버레이의 높이(위치)를 지정한다.
     * 단위는 m(미터)이며 현재 로드뷰의 바닥 높이를 기준으로 떨어져있는 높이를 말한다.
     *
     * @param altitude
     */
    public setAltitude(altitude: number): void

    /**
     * 커스텀 오버레이의 높이(위치)를 반환한다.
     * 단위는 m(미터).
     */
    public getAltitude(): number

    /**
     * 커스텀 오버레이의 가시반경을 설정한다.
     * 로드뷰의 위치와 커스텀 오버레이의 위치 사이의 거리가 가시반경 이내일 경우에만 로드뷰상에 노출된다.
     * 단위는 m(미터)이며 기본값은 500m이다.
     *
     * @param range
     */
    public setRange(range: number): void

    /**
     * 커스텀 오버레이의 가시반경을 반환한다.
     * 단위는 m(미터).
     */
    public getRange(): number
  }

  export interface CustomOverlayOptions {
    /**
     * true 로 설정하면 컨텐츠 영역을 클릭했을 경우 지도 이벤트를 막아준다.
     */
    clickable?: boolean

    /**
     * 엘리먼트 또는 HTML 문자열 형태의 내용
     */
    content?: HTMLElement | string

    /**
     * 커스텀 오버레이가 올라갈 지도 또는 로드뷰
     */
    map?: Map /* | RoadView */

    /**
     * 커스텀 오버레이의 좌표 또는 로드뷰에서의 시점
     */
    position: LatLng /* | ViewPoint */

    /**
     * 컨텐츠의 x축 위치. 0_1 사이의 값을 가진다. 기본값은 0.5
     */
    xAnchor?: number

    /**
     * 컨텐츠의 y축 위치. 0_1 사이의 값을 가진다. 기본값은 0.5
     */
    yAnchor?: number

    /**
     * 커스텀 오버레이의 z-index
     */
    zIndex?: number
  }

  /**
   * @see [LatLng](http://apis.map.daum.net/web/documentation/#LatLng)
   */
  export class LatLng {
    /**
     * WGS84 좌표 정보를 가지고 있는 객체를 생성한다.
     *
     * @param latitude 위도
     * @param longitude 경도
     */
    constructor(latitude: number, longitude: number)

    /**
     * 위도를 반환한다.
     */
    public getLat(): number

    /**
     * 경도를 반환한다.
     */
    public getLng(): number

    /**
     * 객체가 가지고 있는 좌표와 같은 좌표를 가지고 있는 객체인지 비교한다.
     *
     * @param latlng
     */
    public equals(latlng: LatLng): boolean

    /**
     * 객체가 가지고 있는 좌표를 문자열로 반환한다.
     */
    public toString(): string

    /**
     * 객체가 가지고 있는 좌표를 Wcongnamul 좌표로 반환한다.
     */
    public toCoords(): Coords
  }

  /**
   * @see [LatLngBounds](http://apis.map.daum.net/web/documentation/#LatLngBounds)
   */
  export class LatLngBounds {
    /**
     * WGS84 좌표계에서 사각영역 정보를 표현하는 객체를 생성한다.
     *
     * @param sw 사각 영역에서 남서쪽 좌표
     * @param ne 사각 영역에서 북동쪽 좌표
     */
    constructor(sw: LatLng, ne: LatLng)

    /**
     * 영역의 남서쪽 좌표를 반환한다.
     */
    public getSouthWest(): LatLng

    /**
     * 영역의 북동쪽 좌표를 반환한다.
     */
    public getNorthEast(): LatLng

    /**
     * 인수로 주어진 좌표를 포함하도록 영역 정보를 확장한다.
     *
     * @param latlng
     */
    public extend(latlng: LatLng): void

    /**
     * 영역 객체가 인수로 주어진 좌표를 포함하는지 확인한다.
     *
     * @param latlng
     */
    public contain(latlng: LatLng): boolean
  }

  /**
   * @see [Map](http://apis.map.daum.net/web/documentation/#Map)
   */
  export class Map implements kakao.maps.event.EventTarget {
    /**
     * 지도를 생성한다.
     *
     * @param container 지도가 표시될 HTML element
     * @param options
     */
    constructor(container: HTMLElement, options: MapOptions)

    /**
     * 지도의 중심 좌표를 설정한다.
     *
     * @param latlng
     */
    public setCenter(latlng: LatLng): void

    /**
     * 지도의 중심 좌표를 반환한다.
     */
    public getCenter(): LatLng

    /**
     * 지도의 확대 수준을 설정한다.
     * MapTypeId 의 종류에 따라 설정 범위가 다르다.
     * SKYVIEW, HYBRID 일 경우 0 ~ 14, ROADMAP 일 경우 1 ~ 14.
     *
     * @param level
     * @param options
     */
    public setLevel(
      level: number,
      options: {
        /**
         * 지도 확대수준 변경 시 애니메이션 효과 여부
         * (현재 지도 레벨과의 차이가 2 이하인 경우에만 애니메이션 효과 가능)
         */
        animate:
          | boolean
          | {
              /**
               * 애니메이션 효과 지속 시간 (단위: ms)
               */
              duration: number
            }
        /**
         * 지도 확대수준 변경 시 기준 좌표
         */
        anchor: LatLng
      },
    ): void

    /**
     * 지도의 확대 수준을 반환한다.
     */
    public getLevel(): number

    /**
     * 지도의 타입을 설정한다.
     *
     * @param mapTypeId
     */
    public setMapTypeId(mapTypeId: MapTypeId): void

    /**
     * 지도의 타입을 반환한다.
     */
    public getMapTypeId(): MapTypeId

    /**
     * 주어진 영역이 화면 안에 전부 나타날 수 있도록 지도의 중심 좌표와 확대 수준을 설정한다.
     * 주어진 영역외에 추가로 padding값을 지정할 수 있다. 2번째 파라메터부터 top, right, bottom, left값이며
     * 파라메터를 1개 이상 지정한 경우 지정하지 않은 파라메터에 대해서는 CSS의 padding rule을 따른다.
     * (ex. paddingTop:100, paddingRight:50 을 지정한 경우. top, right, bottom, left 순서로 100 50 100 50)
     * padding값을 지정하지 않으면 기본값으로 상하좌우 32가 적용된다.
     *
     * @param bounds
     * @param paddingTop
     * @param paddingRight
     * @param paddingBottom
     * @param paddingLeft
     */
    public setBounds(
      bounds: LatLngBounds,
      paddingTop?: number,
      paddingRight?: number,
      paddingBottom?: number,
      paddingLeft?: number,
    ): void

    /**
     * 지도의 영역을 반환한다.
     */
    public getBounds(): LatLngBounds

    /**
     * 지도의 최저 레벨 값을 설정한다.
     * 기본적으로 레벨 값이 작을수록 지도는 확대되는데
     * 이 함수로 설정한 레벨까지만 확대할 수 있게 된다.
     *
     * @param minLevel
     */
    public setMinLevel(minLevel: number): void

    /**
     * 지도의 최고 레벨 값을 설정한다.
     * 기본적으로 레벨 값이 클수록 지도는 축소되는데
     * 이 함수로 설정한 레벨까지만 축소할 수 있게 된다.
     *
     * @param maxLevel
     */
    public setMaxLevel(maxLevel: number): void

    /**
     * 중심 좌표를 지정한 픽셀 만큼 부드럽게 이동한다.
     * 만약 이동할 거리가 지도 화면의 크기보다 클 경우 애니메이션 없이 이동한다.
     *
     * @param dx
     * @param dy
     */
    public panBy(dx: number, dy: number): void

    /**
     * 중심 좌표를 지정한 좌표 또는 영역으로 부드럽게 이동한다. 필요하면 확대 또는 축소도 수행한다.
     * 만약 이동할 거리가 지도 화면의 크기보다 클 경우 애니메이션 없이 이동한다.
     * padding 만큼 제외하고 영역을 계산하며, padding 을 지정하지 않으면 기본값으로 32가 사용된다.
     *
     * @param latlng_or_bounds
     * @param padding
     */
    public panTo(latlng_or_bounds: LatLng | LatLngBounds, padding?: number): void

    /**
     * 지도에 컨트롤을 추가한다.
     *
     * @param control
     * @param position
     */
    // public addControl(control: MapTypeControl | ZoomControl, position: ControlPosition): void

    /**
     * 지도에서 컨트롤을 제거한다.
     *
     * @param control
     */
    // public removeControl(control: MapTypeControl | ZoomControl): void

    /**
     * 마우스 드래그와 모바일 터치를 이용한 지도 이동 가능 여부를 설정한다.
     *
     * @param draggable
     */
    public setDraggable(draggable: boolean): void

    /**
     * 마우스 드래그와 모바일 터치를 이용한 지도 이동 가능 여부를 반환한다.
     */
    public getDraggable(): boolean

    /**
     * 마우스 휠과 모바일 터치를 이용한 지도 확대, 축소 가능 여부를 설정한다.
     * 지도 객체 함수 호출을 통한 확대, 축소는 동작한다.
     *
     * @param zoomable
     */
    public setZoomable(zoomable: boolean): void

    /**
     * 마우스 휠과 모바일 터치를 이용한 지도 확대, 축소 가능 여부를 반환한다.
     */
    public getZoomable(): boolean

    /**
     * 지도의 projectionId를 지정한다.
     * 이 메소드로 API 내부의 좌표계의 투영 방법을 설정할 수 있다.
     * 기본값은 kakao.maps.ProjectionId.WCONG
     *
     * @param projectionId
     */
    // public setProjectionId(projectionId: ProjectionId): void

    /**
     * 지도의 projectionId를 반환한다.
     */
    // public getProjectionId(): ProjectionId

    /**
     * 지도를 표시하는 HTML elemente의 크기를 변경한 후에는 반드시 이 함수를 호출해야 한다.
     * 단, window의 resize 이벤트에 대해서는 자동으로 호출한다.
     */
    public relayout(): void

    /**
     * 지도에 로드뷰, 교통정보 등의 오버레이 타입의 타일 이미지를 올린다.
     * 로드뷰 타일 이미지를 추가할 경우 RoadviewOverlay 와 동일한 기능을 수행한다.
     *
     * @param mapTypeId
     */
    public addOverlayMapTypeId(mapTypeId: MapTypeId): void

    /**
     * 지도에 로드뷰, 교통정보 등의 오버레이 타입의 타일 이미지를 삭제한다.
     *
     * @param mapTypeId
     */
    public removeOverlayMapTypeId(mapTypeId: MapTypeId): void

    /**
     * 키보드의 방향키와 +,-키로 지도 이동,확대,축소 가능여부를 설정한다.
     *
     * @param active
     */
    public setKeyboardShortcuts(active: boolean): void

    /**
     * 키보드의 방향키와 +,-키로 지도 이동,확대,축소 가능여부를 반환한다.
     */
    public getKeyboardShortcuts(): boolean

    /**
     * copyright의 위치를 설정한다.
     *
     * @param copyrightPosition
     * @param reversed
     */
    // public setCopyrightPosition(copyrightPosition: CopyrightPosition, reversed?: boolean): void

    /**
     * 지도의 좌표 변환 객체를 반환한다.
     */
    public getProjection(): MapProjection

    /**
     * 지도 위에 마우스 커서가 위치할 경우 보여지는 커서의 스타일을 지정한다.
     *
     * @param style
     */
    public setCursor(style: string): void
  }

  export interface MapOptions {
    /**
     * 중심 좌표 (필수)
     */
    center: LatLng

    /**
     * 확대 수준 (기본값: 3)
     */
    level?: number

    /**
     * 지도 종류 (기본값: 일반 지도)
     */
    mapTypeId?: MapTypeId

    /**
     * 마우스 드래그, 휠, 모바일 터치를 이용한 시점 변경(이동, 확대, 축소) 가능 여부
     */
    draggable?: boolean

    /**
     * 마우스 휠, 모바일 터치를 이용한 확대 및 축소 가능 여부
     */
    scrollwheel?: boolean

    /**
     * 더블클릭 이벤트 및 더블클릭 확대 가능 여부
     */
    disableDoubleClick?: boolean

    /**
     * 더블클릭 확대 가능 여부
     */
    disableDoubleClickZoom?: boolean

    /**
     * 투영법 지정 (기본값: kakao.maps.ProjectionId.WCONG)
     */
    projectionId?: string

    /**
     * 지도 타일 애니메이션 설정 여부 (기본값: true)
     */
    tileAnimation?: boolean

    /**
     * 키보드의 방향키와 +, – 키로 지도 이동,확대,축소 가능 여부 (기본값: false)
     */
    keyboardShortcuts?:
      | boolean
      | {
          /**
           * 지도 이동 속도
           */
          speed: number
        }
  }

  /**
   * @see [MapProjection](http://apis.map.daum.net/web/documentation/#MapProjection)
   */
  export class MapProjection {
    /**
     * 지도 좌표에 해당하는 위치 좌표(pixel)를 반환한다.
     * 해당 위치 좌표는 지도 엘리먼트 내부의 레이어 위치를 반영한 좌표이다.
     *
     * @param latlng
     */
    public pointFromCoords(latlng: LatLng): Point

    /**
     * 위치 좌표(pixel)에 해당하는 지도 좌표를 반환한다.
     * 해당 위치 좌표는 지도 엘리먼트 내부의 타일 레이어 위치를 반영한 좌표이다.
     *
     * @param point
     */
    public coordsFromPoint(point: Point): LatLng

    /**
     * 지도 좌표에 해당하는 화면 좌표(pixel)를 반환한다.
     * 해당 화면 좌표는 지도 엘리먼트의 좌상단을 기준으로 한 좌표이다.
     *
     * @param latlng
     */
    public containerPointFromCoords(latlng: LatLng): Point

    /**
     * 화면 좌표(pixel)에 해당하는 지도 좌표를 반환한다.
     * 해당 화면 좌표는 지도 엘리먼트의 좌상단을 기준으로 한 좌표이다.
     *
     * @param point
     */
    public coordsFromContainerPoint(point: Point): LatLng
  }

  /**
   * @see [MapTypeId](http://apis.map.daum.net/web/documentation/#MapTypeId)
   */
  export enum MapTypeId {
    /**
     * (베이스) 일반 지도
     */
    ROADMAP = 1,

    /**
     * (베이스) 스카이뷰
     */
    SKYVIEW = 2,

    /**
     * (베이스) 하이브리드(스카이뷰 + 레이블)
     */
    HYBRID = 3,

    /**
     * (오버레이) 레이블
     */
    OVERLAY = 4,

    /**
     * (오버레이) 로드뷰
     */
    ROADVIEW = 5,

    /**
     * (오버레이) 교통정보
     */
    TRAFFIC = 6,

    /**
     * (오버레이) 지형도
     */
    TERRAIN = 7,

    /**
     * (오버레이) 자전거
     */
    BICYCLE = 8,

    /**
     * (오버레이) 스카이뷰를 위한 자전거 (어두운 지도에서 활용)
     */
    BICYCLE_HYBRID = 9,

    /**
     * (오버레이) 지적편집도
     */
    USE_DISTRICT = 10,
  }

  /**
   * @see [Marker](http://apis.map.daum.net/web/documentation/#Marker)
   */
  export class Marker implements kakao.maps.event.EventTarget {
    /**
     * 주어진 객체로 마커를 생성한다.
     * 지도 뿐만 아니라 로드뷰 위에도 올릴 수 있다.
     *
     * @param options
     */
    constructor(options: MarkerOptions)

    /**
     * 지도 또는 로드뷰에 마커를 올린다.
     * null 을 지정하면 마커를 제거한다.
     *
     * @param map
     */
    public setMap(map: Map | null): void

    /**
     * 마커가 올라가있는 지도를 반환한다.
     */
    public getMap(): Map | null

    /**
     * 마커에 새 MarkerImage를 지정한다.
     *
     * @param image
     */
    public setImage(image: MarkerImage): void

    /**
     * 마커의 MarkerImage를 반환한다.
     */
    public getImage(): MarkerImage | undefined

    /**
     * 마커의 좌표를 지정한다.
     * 로드뷰의 특정 시점에 고정하기 위해서 Viewpoint 객체를 사용할 수도 있다.
     * panoId를 지정한 Viewpoint 를 사용하면 panoId에 해당하는 로드뷰 위치에서만 보이게 된다.
     *
     * @param position
     */
    public setPosition(position: LatLng /* | ViewPoint */): void

    /**
     * 마커의 좌표를 반환한다.
     */
    public getPosition(): LatLng

    /**
     * 마커의 z-index를 설정한다.
     *
     * @param zIndex
     */
    public setZIndex(zIndex: number): void

    /**
     * 마커의 z-index를 반환한다.
     */
    public getZIndex(): number

    /**
     * 마커의 표시 여부를 지정한다.
     *
     * @param visible
     */
    public setVisible(visible: boolean): void

    /**
     * 마커의 표시 여부를 반환한다.
     */
    public getVisible(): boolean

    /**
     * 마커의 툴팁을 설정한다.
     *
     * @param title
     */
    public setTitle(title: string): void

    /**
     * 마커의 툴팁을 반환한다.
     */
    public getTitle(): string

    /**
     * 드래그 가능 여부를 지정한다.
     * 로드뷰에 올라가 있을 경우에는 마커의 드래그 기능을 비활성화 되기 때문에
     * 지도에 올라가 있을 경우에만 의미가 있다.
     *
     * @param draggable
     */
    public setDraggable(draggable: boolean): void

    /**
     * 드래그 가능 여부를 반환한다.
     */
    public getDraggable(): boolean

    /**
     * 클릭 가능 여부를 지정한다.
     * true 로 지정하게 되면 마커를 클릭 했을 때, 지도의 클릭 이벤트가 발생하지 않도록 막아준다.
     *
     * @param clickable
     */
    public setClickable(clickable: boolean): void

    /**
     * 클릭 가능 여부를 반환한다.
     */
    public getClickable(): boolean

    /**
     * 로드뷰상에서 마커의 높이(위치)를 지정한다.
     * 단위는 m(미터)이며 현재 로드뷰의 바닥 높이를 기준으로 떨어져있는 높이를 말한다.
     *
     * @param altitude
     */
    public setAltitude(altitude: number): void

    /**
     * 마커의 높이(위치)를 반환한다.
     * 단위는 m(미터).
     */
    public getAltitude(): number

    /**
     * 마커의 가시반경을 설정한다.
     * 로드뷰의 위치와 마커의 위치 사이의 거리가 가시반경 이내일 경우에만 로드뷰상에 노출된다.
     * 단위는 m(미터)이며 기본값은 500m이다.
     *
     * @param range
     */
    public setRange(range: number): void

    /**
     * 마커의 가시반경을 반환한다.
     * 단위는 m(미터).
     */
    public getRange(): number

    /**
     * 마커의 투명도를 설정한다. (0-1)
     *
     * @param opacity
     */
    public setOpacity(opacity: number): void

    /**
     * 마커의 투명도를 반환한다.
     */
    public getOpacity(): number
  }

  export interface MarkerOptions {
    /**
     * 마커가 올라갈 지도 또는 로드뷰
     */
    map?: Map

    /**
     * 마커의 좌표 또는 로드뷰에서의 시점
     */
    position: LatLng

    /**
     * 마커의 이미지
     */
    image?: MarkerImage

    /**
     * 마커 엘리먼트의 타이틀 속성 값 (툴팁)
     */
    title?: string

    /**
     * 드래그 가능한 마커, 로드뷰에 올릴 경우에는 유효하지 않다.
     */
    draggable?: boolean

    /**
     * 클릭 가능한 마커
     */
    clickable?: boolean

    /**
     * 마커 엘리먼트의 z-index 속성 값
     */
    zIndex?: number

    /**
     * 마커 투명도 (0-1)
     */
    opacity?: number

    /**
     * 로드뷰에 올라있는 마커의 높이 값(m 단위)
     */
    altitude?: number

    /**
     * 로드뷰 상에서 마커의 가시반경(m 단위), 두 지점 사이의 거리가 지정한 값보다 멀어지면 마커는 로드뷰에서 보이지 않게 된다.
     */
    range?: number
  }

  /**
   * @see [MarkerImage](http://apis.map.daum.net/web/documentation/#MarkerImage)
   */
  export class MarkerImage {
    /**
     * 마커에 사용할 이미지를 생성한다.
     * 세 번째 파라메터로 offset을 사용할 경우 네 번째 파라메터로 shape, 다섯 번째 파라메터로 coords를 넣을 수 있다.
     *
     * @param src 이미지 주소
     * @param size 마커의 크기
     * @param options
     */
    constructor(src: string, size: Size, options?: MarkerImageOptions)
  }

  export interface MarkerImageOptions {
    /**
     * 마커 이미지의 alt 속성값을 정의한다.
     */
    alt?: string

    /**
     * 마커의 클릭 또는 마우스오버 가능한 영역을 표현하는 좌표값
     */
    coords?: string

    /**
     * 마커의 좌표에 일치시킬 이미지 안의 좌표 (기본값: 이미지의 가운데 아래)
     */
    offset?: Point

    /**
     * 마커의 클릭 또는 마우스오버 가능한 영역의 모양
     */
    shape?: string

    /**
     * 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
     */
    spriteOrigin?: Point

    /**
     * 스프라이트 이미지의 전체 크기
     */
    spriteSize?: Size
  }

  /**
   * @see [MarkerClusterer](http://apis.map.daum.net/web/documentation/#MarkerClusterer)
   */
  export class MarkerClusterer implements kakao.maps.event.EventTarget {
    /**
     * 마커 클러스터링을 담당하는 객체.
     * clusterer 라이브러리를 별도 로드 해야 사용 가능하다.
     *
     * @see [마커 클러스터러 사용하기 샘플보기](http://apis.map.daum.net/web/sample/basicClusterer/)
     * @param options
     */
    constructor(options: MarkerClustererOptions)

    /**
     * 클러스터에 마커 하나를 추가한다.
     *
     * @param marker 추가할 마커
     * @param nodraw 클러스터 redraw 여부. true인 경우 클러스터를 다시 그리지 않는다.
     */
    addMarker(marker: Marker, nodraw?: boolean): void

    /**
     * 클러스터에 추가된 마커 중 하나를 삭제한다.
     *
     * @param marker 삭제할 마커
     * @param nodraw 클러스터 redraw 여부. true인 경우 클러스터를 다시 그리지 않는다.
     */
    removeMarker(marker: Marker, nodraw?: boolean): void

    /**
     * 여러개의 마커를 추가한다.
     *
     * @param markers 추가할 마커 객체 배열
     * @param nodraw 클러스터 redraw 여부. true인 경우 클러스터를 다시 그리지 않는다.
     */
    addMarkers(markers: Marker[], nodraw?: boolean): void

    /**
     * 추가된 마커 중 여러개의 마커를 삭제한다.
     *
     * @param markers 삭제할 마커 객체 배열
     * @param nodraw 클러스터 redraw 여부. true인 경우 클러스터를 다시 그리지 않는다.
     */
    removeMarkers(markers: Marker[], nodraw?: boolean): void

    /**
     * 추가된 모든 마커를 삭제한다.
     */
    clear(): void

    /**
     * 클러스터를 다시 그린다. 주로 옵션을 변경한 이후 클러스터를 다시 그릴 때 사용한다.
     */
    redraw(): void

    /**
     * 클러스터의 격자 크기를 반환한다.
     */
    getGridSize(): number

    /**
     * 클러스터의 격자 크기를 설정한다. (단위 : 화면픽셀)
     *
     * @param size 격자 크기
     */
    setGridSize(size: number): void

    /**
     * 클러스터를 만들기 위해 필요한 최소 마커 개수를 반환한다.
     */
    getMinClusterSize(): number

    /**
     * 클러스터를 만들기 위해 필요한 최소 마커 개수를 설정한다.
     *
     * @param size 마커 개수
     */
    setMinClusterSize(size: number): void

    /**
     * 현재 설정되어있는 클러스터 마커의 위치 결정 방식을 반환한다.
     * 반환 값이 true 일 경우 클러스터가 포함하는 마커들의 위치 평균값을 사용하고 있음을 의미하고
     * false 일 경우에는 기준이 되는 특정 마커의 위치를 사용하고 있음을 의미한다.
     */
    getAverageCenter(): boolean

    /**
     * 현재 설정되어있는 클러스터 마커의 위치 결정 방식을 설정한다.
     * true 로 설정하면 클러스터가 포함하는 마커들의 위치 평균값을 사용하여 클러스터 마커의 위치를 결정하고
     * false 로 설정하면 기준이 되는 특정 마커의 위치를 클러스터 마커의 위치로 결정한다.
     *
     * @param bool
     */
    setAverageCenter(bool: boolean): void

    /**
     * 클러스터링 할 지도의 최소 레벨 값을 반환한다.
     */
    getMinLevel(): number

    /**
     * 클러스터링 할 지도의 최소 레벨 값을 설정한다.
     *
     * @param level 지도의 레벨
     */
    setMinLevel(level: number): void

    /**
     * 클러스터 내부에 표시할 문자열의 배열 또는 문자열 생성 합수를 반환한다.
     */
    getTexts(): string[] | ((size: number) => string[])

    /**
     * 클러스터 내부에 표시할 문자열 배열 또는 문자열 생성 함수를 설정한다.
     *
     * @see [클러스터 마커에 텍스트 표시하기 샘플보기](http://apis.map.daum.net/web/sample/chickenClusterer)
     * @param texts 클러스터 내부에 표시할 문자열 배열 또는 문자열 생성 함수
     */
    setTexts(texts: string[] | ((size: number) => string[])): void

    /**
     * 클러스터 크기를 구분하는 값을 가진 배열 혹은 구분값 생성 함수를 반환한다.
     */
    getCalculator(): number[] | ((size: number) => number[])

    /**
     * 클러스터 크기를 구분하는 값을 가진 배열 혹은 구분값 생성 함수를 설정한다.
     * 별도로 지정하지 않으면 기본값은 [10, 100, 1000, 10000] 이다.
     * 배열로 지정할 경우에는 반드시 오름차순으로 정렬해야 하며,
     * 생성함수로 지정할 경우에는 클러스터의 스타일 배열 인덱스 또는 텍스트(texts) 배열의 인덱스를 반환해야 한다.
     *
     * @see [클러스터 마커에 텍스트 표시하기 샘플보기](http://apis.map.daum.net/web/sample/chickenClusterer)
     * @param calculator 클러스터의 크기를 구분하는 값의 배열 또는 구분값을 생성하는 함수
     */
    setCalculator(calculator: number[] | ((size: number) => number[])): void

    /**
     * 클러스터 마커에 설정된 스타일 배열을 반환한다.
     */
    getStyles(): object[]

    /**
     * 클러스터 마커에 스타일을 설정한다.
     * 여러개를 선언하면 calculator 로 구분된 사이즈 구간마다 서로 다른 스타일을 적용시킬 수 있다.
     *
     * @param styles 클러스터 마커에 설정할 스타일 배열
     */
    setStyles(styles: object[]): void

    /**
     * 지도에 마커 클러스터러를 올린다.
     * null 을 지정하면 마커 클러스터러를 제거한다.
     *
     * @param map
     */
    setMap(map: Map | null): void

    /**
     * 마커 클러스터러가 올라가있는 지도를 반환한다.
     */
    getMap(): Map | null
  }

  export interface MarkerClustererOptions {
    /**
     * 클러스터링 마커를 표시할 지도 객체
     */
    map?: Map

    /**
     * 클러스터링 할 마커 배열
     */
    markers?: Marker[]

    /**
     * 클러스터의 격자 크기.
     * 화면 픽셀 단위이며 해당 격자 영역 안에 마커가 포함되면 클러스터에 포함시킨다 (default : 60)
     */
    gridSize?: number

    /**
     * 마커들의 좌표 평균을 클러스터 좌표 설정 여부 (default : false)
     */
    averageCenter?: boolean

    /**
     * 클러스터링 할 지도의 최소 레벨 값.
     * 지정한 숫자에 해당하는 레벨 미만에서는 클러스터링 하지 않는다 (default : 0)
     */
    minLevel?: number

    /**
     * 클러스터링 할 최소 마커 수 (default: 2)
     */
    minClusterSize?: number

    /**
     * 클러스터의 스타일.
     * 여러개를 선언하면 calculator 로 구분된 사이즈 구간마다 서로 다른 스타일을 적용시킬 수 있다
     */
    styles?: object[]

    /**
     *
     */
    texts?: string[] | ((size: number) => string)

    /**
     * 클러스터 크기를 구분하는 값을 가진 배열 또는 구분값 생성함수
     * (default : [10, 100, 1000, 10000])
     */
    calculator?: number[] | ((size: number) => number[])

    /**
     * 클러스터 클릭 시 지도 확대 여부.
     * true로 설정하면 클러스터 클릭 시 확대 되지 않는다 (default: false)
     */
    disableClickZoom?: boolean

    /**
     * 클러스터 클릭 가능 여부 지정 옵션.
     * false일 경우 클러스터의 clusterclick, clusterdblclick, clusterrightclick 이벤트가 발생하지 않으며,
     * 커서가 변경되지 않는다. (default: true)
     */
    clickable?: boolean

    /**
     * 클러스터에 마우스 over/out 가능 여부 지정 옵션.
     * false일 경우 클러스터의 clusterover, clusterout 이벤트가 발생하지 않는다.
     * (default: true)
     */
    hoverable?: boolean
  }

  /**
   * @see [Point](http://apis.map.daum.net/web/documentation/#Point)
   */
  export class Point {
    /**
     * 화면 좌표 정보를 담고 있는 포인트 객체를 생성한다.
     *
     * @param x
     * @param y
     */
    constructor(x: number, y: number)

    /**
     * 포인트 객체와 같은 좌표를 가지고 있는 객체인지 비교한다.
     *
     * @param point
     */
    public equals(point: Point): boolean

    /**
     * 포인트 객체가 가지고 있는 좌표를 문자열로 반환한다.
     */
    public toString(): string
  }

  /**
   * @see [Polygon](http://apis.map.daum.net/web/documentation/#Polygon)
   */
  export class Polygon implements kakao.maps.event.EventTarget {
    /**
     * 주어진 객체로 다각형을 생성한다.
     *
     * @param options
     */
    constructor(options: PolygonOptions)

    /**
     * 지도에 다각형을 올린다.
     * null 을 지정하면 다각형을 제거한다.
     *
     * @param map
     */
    public setMap(map: Map | null): void

    /**
     * 다각형이 올라가있는 지도를 반환한다.
     */
    public getMap(): Map | null

    /**
     * 다각형의 옵션을 설정한다.
     *
     * @param options
     */
    public setOptions(options: PolygonOptions): void

    /**
     * 다각형의 경로를 지정한다.
     * 경로는 좌표의 배열로 표현한다.
     *
     * @param path
     */
    public setPath(path: LatLng[]): void

    /**
     * 다각형의 경로를 반환한다.
     */
    public getPath(): LatLng[]

    /**
     * 다각형의 총 길이를 m(미터)단위로 반환한다.
     */
    public getLength(): number

    /**
     * 다각형으로 둘러싸인 영역의 넓이를 ㎡(제곱미터)단위로 반환한다.
     */
    public getArea(): number

    /**
     * 다각형의 z-index를 설정한다.
     *
     * @param zIndex
     */
    public setZIndex(zIndex: number): void

    /**
     * 다각형의 z-index를 반환한다.
     */
    public getZIndex(): number
  }

  export interface PolygonOptions {
    /**
     * #xxxxxx 형태의 채움 색 (기본값: ‘#F10000’)
     */
    fillColor?: string

    /**
     * 채움 불투명도 (0-1) (기본값: 0)
     */
    fillOpacity?: number

    /**
     * 다각형을 구성하는 좌표의 배열 혹은 좌표 배열의 배열
     */
    path: LatLng[] | LatLng[][]

    /**
     * 픽셀 단위의 선 두께 (기본값: 3)
     */
    strokeWeight?: number

    /**
     * #xxxxxx 형태의 선 색 (기본값: ‘#F10000’)
     */
    strokeColor?: string

    /**
     * 선 불투명도 (0-1) (기본값: 0.6)
     */
    strokeOpacity?: number

    /**
     * 선 스타일 (기본값: ‘solid’)
     */
    strokeStyle?: StrokeStyles

    /**
     * 다각형의 z-index 속성 값
     */
    zIndex?: number
  }

  /**
   * 폴리라인 객체
   *
   * @see [Polyline](http://apis.map.daum.net/web/documentation/#Polyline)
   */
  export class Polyline implements kakao.maps.event.EventTarget {
    /**
     * 주어진 객체로 폴리라인을 생성한다.
     *
     * @param options
     */
    constructor(options: PolylineOptions)

    /**
     * 지도에 폴리라인을 올린다.
     * null 을 지정하면 폴리라인을 제거한다.
     *
     * @param map
     */
    public setMap(map: Map | null): void

    /**
     * 폴리라인이 올라가있는 지도를 반환한다.
     */
    public getMap(): Map | null

    /**
     * 폴리라인의 옵션을 설정한다.
     */
    public setOptions(options: PolylineOptions): void

    /**
     * 폴리라인의 경로를 지정한다.
     * 경로는 좌표의 배열로 표현한다.
     *
     * @param path
     */
    public setPath(path: LatLng[]): void

    /**
     * 폴리라인의 경로를 반환한다.
     */
    public getPath(): LatLng[]

    /**
     * 폴리라인의 총 길이를 m(미터)단위로 반환한다.
     */
    public getLength(): number

    /**
     * 폴리라인의 z-index를 설정한다.
     *
     * @param zIndex
     */
    public setZIndex(zIndex: number): void

    /**
     * 폴리라인의 z-index를 반환한다.
     */
    public getZIndex(): number
  }

  export interface PolylineOptions {
    /**
     * 화살표 여부
     */
    endArrow?: boolean

    /**
     * 폴리라인을 구성하는 좌표의 배열 또는 좌표 배열의 배열
     */
    path: LatLng[] | LatLng[][]

    /**
     * 픽셀 단위의 선 두께 (기본값: 3)
     */
    strokeWeight?: number

    /**
     * #xxxxxx 형태의 선 색 (기본값: ‘#F10000’)
     */
    strokeColor?: string

    /**
     * 선 불투명도 (0-1) (기본값: 0.6)
     */
    strokeOpacity?: number

    /**
     * 선 스타일 (기본값: ‘solid’)
     */
    strokeStyle?: StrokeStyles

    /**
     * 선의 z-index 속성 값
     */
    zIndex?: number
  }

  /**
   * @see [Rectangle](http://apis.map.daum.net/web/documentation/#Rectangle)
   */
  export class Rectangle implements kakao.maps.event.EventTarget {
    /**
     * 주어진 객체로 사각형를 생성한다.
     *
     * @param options
     */
    constructor(options: RectangleOptions)

    /**
     * 지도에 사각형을 올린다.
     * null 을 지정하면 사각형을 제거한다.
     *
     * @param map
     */
    public setMap(map: Map | null): void

    /**
     * 사각형이 올라가있는 지도를 반환한다.
     */
    public getMap(): Map | null

    /**
     * 사각형의 옵션을 설정한다.
     *
     * @param options
     */
    public setOptions(options: RectangleOptions): void

    /**
     * 사각형의 영역을 지정한다.
     *
     * @param bounds
     */
    public setBounds(bounds: LatLngBounds): void

    /**
     * 사각형의 영역을 반환한다.
     */
    public getBounds(): LatLngBounds

    /**
     * 사각형의 z-index를 설정한다.
     *
     * @param zIndex
     */
    public setZIndex(zIndex: number): void

    /**
     * 사각형의 z-index를 반환한다.
     */
    public getZIndex(): number
  }

  export interface RectangleOptions {
    /**
     * 사각형의 영역
     */
    bounds: LatLngBounds

    /**
     * #xxxxxx 형태의 채움 색 (기본값: ‘#F10000’)
     */
    fillColor?: string

    /**
     * 채움 불투명도 (0-1) (기본값: 0)
     */
    fillOpacity?: number

    /**
     * 픽셀 단위의 선 두께 (기본값: 3)
     */
    strokeWeight?: number

    /**
     * #xxxxxx 형태의 선 색 (기본값: ‘#F10000’)
     */
    strokeColor?: string

    /**
     * 선 불투명도 (0-1) (기본값: 0.6)
     */
    strokeOpacity?: number

    /**
     * 선 스타일 (기본값: ‘solid’)
     */
    strokeStyle?: StrokeStyles

    /**
     * 사각형의 z-index 속성 값
     */
    zIndex?: number
  }

  /**
   * @see [Size](http://apis.map.daum.net/web/documentation/#Size)
   */
  export class Size {
    /**
     * 크기 정보를 담고 있는 사이즈 객체를 생성한다.
     *
     * @param width
     * @param height
     */
    constructor(width: number, height: number)

    /**
     * 사이즈 객체가 가지고 있는 크기와 같은 크기를 가지고 있는 객체인지 비교한다.
     *
     * @param size
     */
    public equals(size: Size): boolean

    /**
     * 사이즈 객체가 가지고 있는 크기를 문자열로 반환한다.
     */
    public toString(): string
  }

  // Miscellaneous

  /**
   * v3 스크립트를 동적으로 로드하기위해 사용한다.
   * 스크립트의 로딩이 끝나기 전에 v3의 객체에 접근하려고 하면 에러가 발생하기 때문에
   * 로딩이 끝나는 시점에 콜백을 통해 객체에 접근할 수 있도록 해 준다.
   * 비동기 통신으로 페이지에 v3를 동적으로 삽입할 경우에 주로 사용된다.
   * v3 로딩 스크립트 주소에 파라메터로 autoload=false 를 지정해 주어야 한다.
   *
   * @see [load](http://apis.map.daum.net/web/documentation/#load)
   */
  export function load(callback: () => void): void

  /**
   * 고해상도 기기에서 HD 타일을 기본 타일로 사용하지 않도록 한다.
   * 모바일용 로드뷰도 고화질이 아닌 일반화질로 노출된다.
   * 반드시 Map 혹은 Roadview 객체를 선언하기 전에 호출해야 한다.
   *
   * @see [disableHD](http://apis.map.daum.net/web/documentation/#disableHD)
   */
  export function disableHD(): void

  /**
   * 지도 위에 올라가는 각종 도형의 선 스타일을 의미한다.
   * 스타일은 패턴에 따라 11종류가 있으며 그 값은 문자열로 지정한다.
   *
   * @see [StrokeStyles](http://apis.map.daum.net/web/documentation/#StrokeStyles)
   */
  export type StrokeStyles =
    | 'solid'
    | 'shortdash'
    | 'shortdot'
    | 'shortdashdot'
    | 'shortdashdotdot'
    | 'dot'
    | 'dash'
    | 'dashdot'
    | 'longdash'
    | 'longdashdot'
    | 'longdashdotdot'
}

/**
 * 지도 객체의 이벤트 관련 함수를 담은 네임스페이스
 */
declare namespace kakao.maps.event {
  /**
   * 이벤트를 지원하는 다음 지도 API 객체
   */
  export interface EventTarget {}

  /**
   * 다음 지도 API 객체에 이벤트를 등록한다.
   *
   * @param target 이벤트를 지원하는 다음 지도 API 객체
   * @param type 이벤트 이름
   * @param handler 이벤트를 처리할 함수
   */
  export function addListener(target: EventTarget, type: string, handler: Function): void

  /**
   * 다음 지도 API 객체에 등록된 이벤트를 제거한다.
   *
   * @param target 이벤트를 지원하는 다음 지도 API 객체
   * @param type 이벤트 이름
   * @param handler 이벤트를 처리하던 함수
   */
  export function removeListener(target: EventTarget, type: string, handler: Function): void

  /**
   * 다음 지도 API 객체에 등록된 이벤트를 발생시킨다.
   *
   * @param target 이벤트를 지원하는 다음 지도 API 객체
   * @param type 이벤트 이름
   * @param data 이벤트를 처리하는 함수에 넘길 변수
   */
  export function trigger(target: EventTarget, type: string, data?: any): void

  /**
   * 다음 Map 객체의 이벤트를 막는다.
   * 보통 CustomOverlay의 content 혹은 외부 Element의 이벤트 핸들러에서 지도의 이벤트를 막고 싶을 경우 사용한다.
   * 이벤트의 핸들러 내부에서 이 함수를 사용하며, 이벤트의 핸들링이 끝나면 Map 객체의 이벤트는 다시 정상 동작하게 된다.
   */
  export function preventMap(): void

  /**
   * 마우스 이벤트로 넘겨 받는 인자
   * 직접 생성할 수는 없으며 이벤트 핸들러에서 내부적으로 생성된 객체를 parameter로 받아 사용한다.
   *
   * @see [MouseEvent](http://apis.map.daum.net/web/documentation/#MouseEvent)
   */
  export interface MouseEvent {
    /**
     * 지도 좌표
     */
    latLng?: LatLng

    /**
     * 화면 좌표
     */
    point?: Point
  }
}

/**
 * 장소 검색 및 주소-좌표 간 변환 서비스를 포함하고 있다.
 */
declare namespace kakao.maps.services {
  /**
   * 좌표 변환을 지원하는 좌표계가 상수로 정의되어 있다.
   * 좌표 변환( transCoord )에서 변환을 위해,
   * 좌표→주소 변환( coord2RegionCode, coord2Address )에서 입력한 좌표의 좌표계를 지정하거나
   * 또는 받을 출력 좌표계를 지정하기 위해 사용한다.
   */
  export enum Coords {
    WGS84 = 'WGS84',
    WCONGNAMUL = 'WCONGNAMUL',
    CONGNAMUL = 'CONGNAMUL',
    WTM = 'WTM',
    TM = 'TM',
  }

  /**
   * 주소-좌표간 변환 서비스 객체를 생성한다.
   *
   * @see [Geocorder](http://apis.map.daum.net/web/documentation/#services_Geocoder)
   */
  export class Geocoder {
    /**
     * 입력한 좌표를 다른 좌표계의 좌표로 변환한다.
     *
     * @param x 변환할 x 좌표
     * @param y 변환할 y 좌표
     * @param callback 변환 결과를 받을 콜백함수
     * @param options
     */
    public transCoord(
      x: number,
      y: number,
      callback: (
        /**
         * 변환된 좌표 결과
         */
        result: Array<{
          meta: {
            /**
             * 매칭된 문서수
             */
            total_count: number
          }
          documents: Array<{
            x: number
            y: number
          }>
        }>,
        /**
         * 응답 코드
         */
        status: Status,
      ) => void,
      options?: {
        /**
         * 입력 좌표 체계. 기본값은 WGS84
         */
        input_coord?: Coords

        /**
         * 출력 좌표 체계. 기본값은 WGS84
         */
        output_coord?: Coords
      },
    ): void
  }

  /**
   * 정렬을 위한 옵션 값이 상수로 정의되어 있다.
   * 장소 검색( keywordSearch, categorySearch )에서 결과의 정렬을 위해 사용한다.
   * 이 중, DISTANCE 을 사용하기 위해서는 또 다른 옵션 중 하나인 location 이 함께 지정되어 있어야 한다.
   */
  export enum SortBy {
    /**
     * 정확도 순
     */
    ACCURACY = 'accuracy',

    /**
     * 거리 순
     */
    DISTANCE = 'distance',
  }

  /**
   * 응답 코드가 상수로 정의되어 있다.
   */
  export enum Status {
    /**
     * 서버 응답에 문제가 있는 경우
     */
    ERROR = 'ERROR',

    /**
     * 검색 결과 있음
     */
    OK = 'OK',

    /**
     * 정상적으로 응답 받았으나 검색 결과는 없음
     */
    ZERO_RESULT = 'ZERO_RESULT',
  }
}
