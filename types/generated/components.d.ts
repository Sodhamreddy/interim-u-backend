import type { Schema, Attribute } from '@strapi/strapi';

export interface LayoutSeniorSJourneyWithUs extends Schema.Component {
  collectionName: 'components_layout_senior_s_journey_with_us_s';
  info: {
    displayName: 'Senior\u2019s Journey with us!';
    description: '';
  };
  attributes: {
    journey: Attribute.Component<'layout.journey', true>;
    Heading: Attribute.String;
  };
}

export interface LayoutJourney extends Schema.Component {
  collectionName: 'components_layout_journeys';
  info: {
    displayName: 'journey';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    description: Attribute.Text;
  };
}

export interface LayoutBeginYourSeniorSJourneyWithUs extends Schema.Component {
  collectionName: 'components_layout_begin_your_senior_s_journey_with_us_s';
  info: {
    displayName: ' Begin your Senior\u2019s Journey with us!';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    description: Attribute.Text;
  };
}

export interface ComponentsWhenIsTheRightTime extends Schema.Component {
  collectionName: 'components_components_when_is_the_right_times';
  info: {
    displayName: 'When is the right time';
  };
  attributes: {
    Heading: Attribute.String;
    description: Attribute.Blocks;
    img: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ComponentsSubcityCaregivers extends Schema.Component {
  collectionName: 'components_components_subcity_caregivers';
  info: {
    displayName: 'SubcityCaregivers';
  };
  attributes: {
    BeginSeniorsJourney: Attribute.Component<'layout.begin-your-senior-s-journey-with-us'>;
  };
}

export interface ComponentsServicesListHome extends Schema.Component {
  collectionName: 'components_components_services_list_homes';
  info: {
    displayName: 'services_list_home';
    description: '';
  };
  attributes: {
    Heading: Attribute.String;
    description: Attribute.Text;
    Services: Attribute.Component<'components.services-home-list-all', true>;
  };
}

export interface ComponentsServicesHomeListAll extends Schema.Component {
  collectionName: 'components_components_services_home_list_alls';
  info: {
    displayName: 'services-Home_list_all';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Heading: Attribute.String;
  };
}

export interface ComponentsServicesCards extends Schema.Component {
  collectionName: 'components_components_services_cards';
  info: {
    displayName: 'Services_cards';
    icon: 'alien';
  };
  attributes: {
    Heading: Attribute.String;
    description: Attribute.Text;
    Service_Img: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ComponentsServicesBanner extends Schema.Component {
  collectionName: 'components_components_services_banners';
  info: {
    displayName: 'Services-banner';
  };
  attributes: {
    Heading: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ComponentsServicelistBanner extends Schema.Component {
  collectionName: 'components_components_servicelist_banners';
  info: {
    displayName: 'servicelist-banner';
  };
  attributes: {
    Heading: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ComponentsServiceListHead extends Schema.Component {
  collectionName: 'components_components_service_list_heads';
  info: {
    displayName: 'service_list_head';
  };
  attributes: {
    Heading: Attribute.String;
  };
}

export interface ComponentsServiceCityList extends Schema.Component {
  collectionName: 'components_components_service_city_lists';
  info: {
    displayName: 'service-city-list';
    description: '';
  };
  attributes: {
    Heading: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ComponentsRightImgLeftContent extends Schema.Component {
  collectionName: 'components_components_right_img_left_contents';
  info: {
    displayName: 'right-img-left-content';
  };
  attributes: {
    Heading: Attribute.String;
    description: Attribute.Blocks;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ComponentsMiddleHeddecLeftImgRightContent
  extends Schema.Component {
  collectionName: 'components_components_middle_heddec_left_img_right_contents';
  info: {
    displayName: 'middle-heddec-left-img-right-content';
    description: '';
  };
  attributes: {
    Heading: Attribute.String;
    subHeading: Attribute.Text;
    img: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    description: Attribute.Blocks;
  };
}

export interface ComponentsMiddleHedDec extends Schema.Component {
  collectionName: 'components_components_middle_hed_decs';
  info: {
    displayName: 'middle-hed-dec';
  };
  attributes: {
    Heading: Attribute.String;
    description: Attribute.Blocks;
  };
}

export interface ComponentsMiddleHedCards extends Schema.Component {
  collectionName: 'components_components_middle_hed_cards_s';
  info: {
    displayName: 'Middle-hed-cards ';
    description: '';
  };
  attributes: {
    Heading: Attribute.String;
    description: Attribute.Text;
    cardiconbox: Attribute.Component<'components.card-icon-box', true>;
    btn: Attribute.Component<'components.link'>;
  };
}

export interface ComponentsLink extends Schema.Component {
  collectionName: 'components_components_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    url: Attribute.String;
    text: Attribute.String;
    isExternal: Attribute.Boolean;
  };
}

export interface ComponentsLeftImgRightContent extends Schema.Component {
  collectionName: 'components_components_left_img_right_contents';
  info: {
    displayName: 'left-img-right-content';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Heading: Attribute.String;
    description: Attribute.Blocks;
  };
}

export interface ComponentsHomePageAwards extends Schema.Component {
  collectionName: 'components_components_home_page_awards';
  info: {
    displayName: 'home_page_awards';
  };
  attributes: {
    Img: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Heading: Attribute.String;
  };
}

export interface ComponentsHomeFooter extends Schema.Component {
  collectionName: 'components_components_home_footers';
  info: {
    displayName: 'home-footer';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Heading: Attribute.String;
    btn: Attribute.Component<'components.link'>;
    copy_rights: Attribute.String;
  };
}

export interface ComponentsFooterMain extends Schema.Component {
  collectionName: 'components_components_footer_mains';
  info: {
    displayName: 'footer-main';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    button: Attribute.Component<'components.link'>;
    description: Attribute.Blocks;
    copyrights: Attribute.String;
  };
}

export interface ComponentsFooterAboveFrom extends Schema.Component {
  collectionName: 'components_components_footer_above_froms';
  info: {
    displayName: 'footer-above-from';
  };
  attributes: {
    Heading: Attribute.String;
    description: Attribute.Text;
  };
}

export interface ComponentsExceptionalMemoryCare extends Schema.Component {
  collectionName: 'components_components_exceptional_memory_cares';
  info: {
    displayName: 'Exceptional memory care';
  };
  attributes: {
    Heading: Attribute.String;
    description: Attribute.Blocks;
    btn: Attribute.Component<'components.link', true>;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ComponentsCityList extends Schema.Component {
  collectionName: 'components_components_city_lists';
  info: {
    displayName: 'city-list';
  };
  attributes: {
    citynames: Attribute.RichText;
  };
}

export interface ComponentsChooseInterimHealthcare extends Schema.Component {
  collectionName: 'components_components_choose_interim_healthcares';
  info: {
    displayName: 'Choose Interim-Healthcare';
    description: '';
  };
  attributes: {
    img: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Heading: Attribute.String;
    description: Attribute.Blocks;
  };
}

export interface ComponentsCargiverCta extends Schema.Component {
  collectionName: 'components_components_cargiver_ctas';
  info: {
    displayName: 'cargiver-cta';
  };
  attributes: {
    Heading: Attribute.String;
    btn: Attribute.Component<'components.link', true>;
  };
}

export interface ComponentsCardIconBox extends Schema.Component {
  collectionName: 'components_components_card_icon_boxes';
  info: {
    displayName: 'card_icon_box';
    description: '';
  };
  attributes: {
    card_hed: Attribute.String;
    cardaddress_icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    cardaddress: Attribute.String;
    cardphone_icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    cardphone: Attribute.String;
    button: Attribute.Component<'components.link'>;
  };
}

export interface ComponentsBenefits extends Schema.Component {
  collectionName: 'components_components_benefits';
  info: {
    displayName: 'Benefits';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Heading: Attribute.String;
    description: Attribute.Blocks;
  };
}

export interface ComponentsBenefitsOurMemoryCare extends Schema.Component {
  collectionName: 'components_components_benefits_our_memory_care_s';
  info: {
    displayName: 'Benefits our Memory Care ';
  };
  attributes: {
    img: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Heading: Attribute.String;
    description: Attribute.Blocks;
  };
}

export interface ComponentsBeginYourSeniorSJourneyWithUsHeading
  extends Schema.Component {
  collectionName: 'components_components_begin_your_senior_s_journey_with_us_headings';
  info: {
    displayName: ' Begin your Senior\u2019s Journey with us! heading';
  };
  attributes: {
    Heading: Attribute.String;
  };
}

export interface ComponentsBannerHero extends Schema.Component {
  collectionName: 'components_components_banner_heroes';
  info: {
    displayName: 'Banner-hero';
    description: '';
  };
  attributes: {
    Heading: Attribute.String;
    subHeading: Attribute.Text;
    btn: Attribute.Component<'components.link'>;
    bannerimg: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'layout.senior-s-journey-with-us': LayoutSeniorSJourneyWithUs;
      'layout.journey': LayoutJourney;
      'layout.begin-your-senior-s-journey-with-us': LayoutBeginYourSeniorSJourneyWithUs;
      'components.when-is-the-right-time': ComponentsWhenIsTheRightTime;
      'components.subcity-caregivers': ComponentsSubcityCaregivers;
      'components.services-list-home': ComponentsServicesListHome;
      'components.services-home-list-all': ComponentsServicesHomeListAll;
      'components.services-cards': ComponentsServicesCards;
      'components.services-banner': ComponentsServicesBanner;
      'components.servicelist-banner': ComponentsServicelistBanner;
      'components.service-list-head': ComponentsServiceListHead;
      'components.service-city-list': ComponentsServiceCityList;
      'components.right-img-left-content': ComponentsRightImgLeftContent;
      'components.middle-heddec-left-img-right-content': ComponentsMiddleHeddecLeftImgRightContent;
      'components.middle-hed-dec': ComponentsMiddleHedDec;
      'components.middle-hed-cards': ComponentsMiddleHedCards;
      'components.link': ComponentsLink;
      'components.left-img-right-content': ComponentsLeftImgRightContent;
      'components.home-page-awards': ComponentsHomePageAwards;
      'components.home-footer': ComponentsHomeFooter;
      'components.footer-main': ComponentsFooterMain;
      'components.footer-above-from': ComponentsFooterAboveFrom;
      'components.exceptional-memory-care': ComponentsExceptionalMemoryCare;
      'components.city-list': ComponentsCityList;
      'components.choose-interim-healthcare': ComponentsChooseInterimHealthcare;
      'components.cargiver-cta': ComponentsCargiverCta;
      'components.card-icon-box': ComponentsCardIconBox;
      'components.benefits': ComponentsBenefits;
      'components.benefits-our-memory-care': ComponentsBenefitsOurMemoryCare;
      'components.begin-your-senior-s-journey-with-us-heading': ComponentsBeginYourSeniorSJourneyWithUsHeading;
      'components.banner-hero': ComponentsBannerHero;
    }
  }
}
