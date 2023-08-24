export interface VendorsFiltersQuery {
    page: number;
    page_size: number;
    lat: number;
    long: number;
}
export interface VendorsResponse {
    data: VendorsData;
    render_type: number;
    status: boolean;
}

export interface VendorsData {
    count: number;
    extra_sections: ExtraSections;
    finalResult: FinalResult[];
    meta_tags: MetaTags;
    open_count: number;
}

export interface ExtraSections {
    categories: Categories;
    filters: Filters;
    pickup: Pickup;
    render_type: number;
}

export interface Categories {
    data: any[];
    open: boolean;
    single_choice: boolean;
}

export interface Filters {
    sections: Section[];
    top: Top;
}

export interface Section {
    data: SectionDatum[];
    description?: string;
    exclude_in_pickup: boolean;
    open: boolean;
    section_name: string;
    section_name_fa: string;
    suggest: boolean;
}

export interface SectionDatum {
    badge?: string;
    description?: string;
    exclude_in_pickup: boolean;
    image: null;
    kind: string;
    open: boolean;
    selected: boolean;
    single_choice: boolean;
    suggest?: boolean;
    suggested_sort?: number;
    title: string;
    value: string;
}

export interface Top {
    data: TopDatum[];
    open: boolean;
}

export interface TopDatum {
    exclude_in_pickup: boolean;
    image: null;
    kind: string;
    open: boolean;
    selected: boolean;
    single_choice: boolean;
    title: string;
    value: string;
}

export interface Pickup {
    active: boolean;
    filter_text: string;
    is_new: boolean;
    open: boolean;
}

export interface FinalResult {
    data: FinalResultData;
    type: Type;
}

export interface FinalResultData {
    action: string;
    address: string;
    area: string;
    backgroundImage: string;
    backgroundImageCustom: string;
    badges: Badge[];
    best_coupon: string;
    bid: boolean;
    budgetClass: BudgetClass;
    childType: ChildType;
    city: City;
    click_id: null;
    commentCount: number;
    containerFee: number;
    costsForTwo: number;
    countOfUserImages: number;
    countReview: number;
    coupon_count: number;
    coverPath: string;
    cpc_campaign_hash: null;
    cpc_spot: null;
    cuisinesArray: CuisinesArray[];
    defLogo: string;
    delay: string;
    delay_time: number;
    deliver: boolean;
    deliveryArea: string;
    deliveryFee: number;
    deliveryFeeDiscount: number;
    deliveryGuarantee: boolean;
    deliveryTime: number;
    description: string;
    discount: number;
    discountForAll: boolean;
    discountStartHour1: string;
    discountStartHour2: string;
    discountStopHour1: string;
    discountStopHour2: string;
    discountType: null;
    discountValue: number;
    discountValueForView: number;
    establishment: string;
    eta: number;
    foodTypes: any[];
    has_cashback: boolean;
    has_coupon: boolean;
    has_delay: boolean;
    has_first_coupon: boolean;
    id: number;
    isFavorite: boolean;
    isOpen: boolean;
    isZFExpress: boolean;
    is_ecommerce: boolean;
    is_economical: boolean;
    is_food_party: boolean;
    is_grocery_economic: boolean;
    is_grocery_returnable: boolean;
    is_grocery_vip: boolean;
    is_market_party: boolean;
    is_pro: boolean;
    lat: number;
    logo: string;
    lon: number;
    maxDeliveryFee: number;
    max_eta: number;
    menuImage: any[];
    menuUrl: string;
    minDeliveryFee: number;
    minOrder: number;
    min_eta: number;
    mostPopularItems: string;
    new_type: NewType;
    new_type_title: TypeTitle;
    noOrder: boolean;
    onlineOrder: boolean;
    open_at_eta: boolean;
    paymentTypes: number[];
    phone: string;
    preOrderEnabled: boolean;
    preorderToday: PreorderToday;
    priority: number;
    rate: number;
    rating: number;
    recommendedFor: RecommendedFor;
    restaurantClass: string;
    restaurantTypes: any[];
    schedules: Schedule[];
    serviceFee: number;
    status: number;
    status_description: string;
    status_text: string;
    status_title: StatusTitle;
    superTypeAlias: ChildType;
    tax: number;
    taxEnabled: boolean;
    taxEnabledInDeliveryFee: boolean;
    taxEnabledInPackaging: boolean;
    taxEnabledInProducts: boolean;
    taxIncluded: boolean;
    title: string;
    total_time: number;
    trendingScore: number;
    userImage: UserImage[];
    vendorCode: string;
    vendorType: ChildType;
    vendorTypeTitle: TypeTitle;
    voteCount: number;
    website: string;
}

export interface Badge {
    description: string;
    image: string;
    title: string;
    white_image: string;
}

export enum BudgetClass {
    بهصرفه = 'به صرفه',
    لوکس = 'لوکس',
    مناسب = 'مناسب',
}

export enum ChildType {
    Caffe = 'CAFFE',
    Restaurant = 'RESTAURANT',
}

export enum City {
    تهران = 'تهران',
}

export interface CuisinesArray {
    id: number;
    title: string;
}

export enum NewType {
    Restaurant = 'RESTAURANT',
    Store = 'Store',
}

export enum TypeTitle {
    رستوران = 'رستوران',
    فروشگاه = 'فروشگاه',
}

export interface PreorderToday {
    intervals: null;
    name: string;
    startHour: string;
    weekday: string;
}

export enum RecommendedFor {
    Empty = '',
    پاستاواستیک = 'پاستا و استیک',
}

export interface Schedule {
    allDay: boolean;
    startHour: StartHour;
    stopHour: StopHour;
    type: number;
    weekday: number;
}

export enum StartHour {
    The0000 = '00:00',
    The0730 = '07:30',
    The1030 = '10:30',
    The1100 = '11:00',
    The1130 = '11:30',
    The1200 = '12:00',
    The1300 = '13:00',
    The1830 = '18:30',
    The2345 = '23:45',
}

export enum StopHour {
    The0030 = '00:30',
    The0045 = '00:45',
    The0100 = '01:00',
    The0130 = '01:30',
    The0200 = '02:00',
    The1700 = '17:00',
    The2330 = '23:30',
    The2345 = '23:45',
    The2359 = '23:59',
}

export enum StatusTitle {
    Active = 'ACTIVE',
}

export interface UserImage {
    commentCount: number;
    description: null;
    fileName: string;
    id: number;
    imageType: ImageType;
    likeCount: number;
    thumbNailSource: string;
    timeDifference: number;
    userType: UserType;
}

export enum ImageType {
    MenuCaptureImage = 'MENU_CAPTURE_IMAGE',
    ProductImage = 'PRODUCT_IMAGE',
}

export enum UserType {
    Zoodfood = 'ZOODFOOD',
}

export enum Type {
    Vendor = 'VENDOR',
}

export interface MetaTags {
    description: string;
    header: string;
    title: string;
}