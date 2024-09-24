import type { Schema, Attribute } from '@strapi/strapi';

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
  collectionName: 'strapi_releases';
  info: {
    singularName: 'release';
    pluralName: 'releases';
    displayName: 'Release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    releasedAt: Attribute.DateTime;
    scheduledAt: Attribute.DateTime;
    timezone: Attribute.String;
    status: Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Attribute.Required;
    actions: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Schema.CollectionType {
  collectionName: 'strapi_release_actions';
  info: {
    singularName: 'release-action';
    pluralName: 'release-actions';
    displayName: 'Release Action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    type: Attribute.Enumeration<['publish', 'unpublish']> & Attribute.Required;
    entry: Attribute.Relation<
      'plugin::content-releases.release-action',
      'morphToOne'
    >;
    contentType: Attribute.String & Attribute.Required;
    locale: Attribute.String;
    release: Attribute.Relation<
      'plugin::content-releases.release-action',
      'manyToOne',
      'plugin::content-releases.release'
    >;
    isEntryValid: Attribute.Boolean;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 50;
        },
        number
      >;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAlzheimerSAndDementiaAlzheimerSAndDementia
  extends Schema.SingleType {
  collectionName: 'alzheimer_s_and_dementias';
  info: {
    singularName: 'alzheimer-s-and-dementia';
    pluralName: 'alzheimer-s-and-dementias';
    displayName: 'Alzheimer\u2019s and Dementia';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'components.when-is-the-right-time',
        'components.link',
        'components.exceptional-memory-care',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.banner-hero',
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'layout.begin-your-senior-s-journey-with-us',
        'components.begin-your-senior-s-journey-with-us-heading',
        'components.footer-main',
        'components.footer-above-from',
        'components.servicelist-banner',
        'components.services-cards'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::alzheimer-s-and-dementia.alzheimer-s-and-dementia',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::alzheimer-s-and-dementia.alzheimer-s-and-dementia',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBellaVistaBellaVista extends Schema.CollectionType {
  collectionName: 'bella_vistas';
  info: {
    singularName: 'bella-vista';
    pluralName: 'bella-vistas';
    displayName: 'Redding-Bella-Vista';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'layout.begin-your-senior-s-journey-with-us',
        'components.when-is-the-right-time',
        'components.subcity-caregivers',
        'components.services-list-home',
        'components.services-home-list-all',
        'components.services-banner',
        'components.servicelist-banner',
        'components.service-list-head',
        'components.service-city-list',
        'components.right-img-left-content',
        'components.middle-heddec-left-img-right-content',
        'components.middle-hed-dec',
        'components.middle-hed-cards',
        'components.link',
        'components.left-img-right-content',
        'components.home-page-awards',
        'components.home-footer',
        'components.footer-main',
        'components.footer-above-from',
        'components.exceptional-memory-care',
        'components.city-list',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.card-icon-box',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.begin-your-senior-s-journey-with-us-heading',
        'components.banner-hero'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::bella-vista.bella-vista',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::bella-vista.bella-vista',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCaregiverCtaCaregiverCta extends Schema.SingleType {
  collectionName: 'caregiver_ctas';
  info: {
    singularName: 'caregiver-cta';
    pluralName: 'caregiver-ctas';
    displayName: 'caregiver-cta';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'layout.begin-your-senior-s-journey-with-us',
        'components.when-is-the-right-time',
        'components.subcity-caregivers',
        'components.services-list-home',
        'components.services-home-list-all',
        'components.services-cards',
        'components.services-banner',
        'components.servicelist-banner',
        'components.service-list-head',
        'components.service-city-list',
        'components.right-img-left-content',
        'components.middle-heddec-left-img-right-content',
        'components.middle-hed-dec',
        'components.middle-hed-cards',
        'components.link',
        'components.left-img-right-content',
        'components.home-page-awards',
        'components.home-footer',
        'components.footer-main',
        'components.footer-above-from',
        'components.exceptional-memory-care',
        'components.city-list',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.card-icon-box',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.begin-your-senior-s-journey-with-us-heading',
        'components.banner-hero'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::caregiver-cta.caregiver-cta',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::caregiver-cta.caregiver-cta',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCarsonCarson extends Schema.CollectionType {
  collectionName: 'carsons';
  info: {
    singularName: 'carson';
    pluralName: 'carsons';
    displayName: 'Carson';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'layout.begin-your-senior-s-journey-with-us',
        'components.when-is-the-right-time',
        'components.subcity-caregivers',
        'components.services-list-home',
        'components.services-home-list-all',
        'components.services-banner',
        'components.servicelist-banner',
        'components.service-list-head',
        'components.service-city-list',
        'components.right-img-left-content',
        'components.middle-heddec-left-img-right-content',
        'components.middle-hed-dec',
        'components.middle-hed-cards',
        'components.link',
        'components.left-img-right-content',
        'components.home-page-awards',
        'components.home-footer',
        'components.footer-main',
        'components.footer-above-from',
        'components.exceptional-memory-care',
        'components.city-list',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.card-icon-box',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.begin-your-senior-s-journey-with-us-heading',
        'components.banner-hero'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::carson.carson',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::carson.carson',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCarson24HourHomeCareCarson24HourHomeCare
  extends Schema.CollectionType {
  collectionName: 'carson_24_hour_home_cares';
  info: {
    singularName: 'carson-24-hour-home-care';
    pluralName: 'carson-24-hour-home-cares';
    displayName: 'Carson - 24 Hour Home Care';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'layout.begin-your-senior-s-journey-with-us',
        'components.when-is-the-right-time',
        'components.subcity-caregivers',
        'components.services-list-home',
        'components.services-home-list-all',
        'components.services-cards',
        'components.services-banner',
        'components.servicelist-banner',
        'components.service-list-head',
        'components.service-city-list',
        'components.right-img-left-content',
        'components.middle-heddec-left-img-right-content',
        'components.middle-hed-dec',
        'components.middle-hed-cards',
        'components.link',
        'components.left-img-right-content',
        'components.home-page-awards',
        'components.home-footer',
        'components.footer-main',
        'components.footer-above-from',
        'components.exceptional-memory-care',
        'components.city-list',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.card-icon-box',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.begin-your-senior-s-journey-with-us-heading',
        'components.banner-hero'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::carson-24-hour-home-care.carson-24-hour-home-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::carson-24-hour-home-care.carson-24-hour-home-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCarsonAlzheimerSAndDementiaCareCarsonAlzheimerSAndDementiaCare
  extends Schema.CollectionType {
  collectionName: 'carson_alzheimer_s_and_dementia_cares';
  info: {
    singularName: 'carson-alzheimer-s-and-dementia-care';
    pluralName: 'carson-alzheimer-s-and-dementia-cares';
    displayName: 'Carson - Alzheimer\u2019s & Dementia Care';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'layout.begin-your-senior-s-journey-with-us',
        'components.when-is-the-right-time',
        'components.subcity-caregivers',
        'components.services-list-home',
        'components.services-home-list-all',
        'components.services-cards',
        'components.services-banner',
        'components.servicelist-banner',
        'components.service-list-head',
        'components.service-city-list',
        'components.right-img-left-content',
        'components.middle-heddec-left-img-right-content',
        'components.middle-hed-dec',
        'components.middle-hed-cards',
        'components.link',
        'components.left-img-right-content',
        'components.home-page-awards',
        'components.home-footer',
        'components.footer-main',
        'components.footer-above-from',
        'components.exceptional-memory-care',
        'components.city-list',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.card-icon-box',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.begin-your-senior-s-journey-with-us-heading',
        'components.banner-hero'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::carson-alzheimer-s-and-dementia-care.carson-alzheimer-s-and-dementia-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::carson-alzheimer-s-and-dementia-care.carson-alzheimer-s-and-dementia-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCarsonCompanionCareCarsonCompanionCare
  extends Schema.CollectionType {
  collectionName: 'carson_companion_cares';
  info: {
    singularName: 'carson-companion-care';
    pluralName: 'carson-companion-cares';
    displayName: 'Carson  - Companion Care';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'layout.begin-your-senior-s-journey-with-us',
        'components.when-is-the-right-time',
        'components.subcity-caregivers',
        'components.services-list-home',
        'components.services-home-list-all',
        'components.services-cards',
        'components.services-banner',
        'components.servicelist-banner',
        'components.service-list-head',
        'components.service-city-list',
        'components.right-img-left-content',
        'components.middle-heddec-left-img-right-content',
        'components.middle-hed-dec',
        'components.middle-hed-cards',
        'components.link',
        'components.left-img-right-content',
        'components.home-page-awards',
        'components.home-footer',
        'components.footer-main',
        'components.footer-above-from',
        'components.exceptional-memory-care',
        'components.city-list',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.card-icon-box',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.begin-your-senior-s-journey-with-us-heading',
        'components.banner-hero'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::carson-companion-care.carson-companion-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::carson-companion-care.carson-companion-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCarsonHospiceCareCarsonHospiceCare
  extends Schema.CollectionType {
  collectionName: 'carson_hospice_cares';
  info: {
    singularName: 'carson-hospice-care';
    pluralName: 'carson-hospice-cares';
    displayName: 'Carson - Hospice Care';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'layout.begin-your-senior-s-journey-with-us',
        'components.when-is-the-right-time',
        'components.subcity-caregivers',
        'components.services-list-home',
        'components.services-home-list-all',
        'components.services-cards',
        'components.services-banner',
        'components.servicelist-banner',
        'components.service-list-head',
        'components.service-city-list',
        'components.right-img-left-content',
        'components.middle-heddec-left-img-right-content',
        'components.middle-hed-dec',
        'components.middle-hed-cards',
        'components.link',
        'components.left-img-right-content',
        'components.home-page-awards',
        'components.home-footer',
        'components.footer-main',
        'components.footer-above-from',
        'components.exceptional-memory-care',
        'components.city-list',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.card-icon-box',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.begin-your-senior-s-journey-with-us-heading',
        'components.banner-hero'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::carson-hospice-care.carson-hospice-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::carson-hospice-care.carson-hospice-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCarsonPersonalCareCarsonPersonalCare
  extends Schema.CollectionType {
  collectionName: 'carson_personal_cares';
  info: {
    singularName: 'carson-personal-care';
    pluralName: 'carson-personal-cares';
    displayName: 'Carson - Personal Care';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'layout.begin-your-senior-s-journey-with-us',
        'components.when-is-the-right-time',
        'components.subcity-caregivers',
        'components.services-list-home',
        'components.services-home-list-all',
        'components.services-cards',
        'components.services-banner',
        'components.servicelist-banner',
        'components.service-list-head',
        'components.service-city-list',
        'components.right-img-left-content',
        'components.middle-heddec-left-img-right-content',
        'components.middle-hed-dec',
        'components.middle-hed-cards',
        'components.link',
        'components.left-img-right-content',
        'components.home-page-awards',
        'components.home-footer',
        'components.footer-main',
        'components.footer-above-from',
        'components.exceptional-memory-care',
        'components.city-list',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.card-icon-box',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.begin-your-senior-s-journey-with-us-heading',
        'components.banner-hero'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::carson-personal-care.carson-personal-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::carson-personal-care.carson-personal-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCarsonVeteranCareCarsonVeteranCare
  extends Schema.CollectionType {
  collectionName: 'carson_veteran_cares';
  info: {
    singularName: 'carson-veteran-care';
    pluralName: 'carson-veteran-cares';
    displayName: 'Carson - Veteran Care';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'layout.begin-your-senior-s-journey-with-us',
        'components.when-is-the-right-time',
        'components.subcity-caregivers',
        'components.services-list-home',
        'components.services-home-list-all',
        'components.services-cards',
        'components.services-banner',
        'components.servicelist-banner',
        'components.service-list-head',
        'components.service-city-list',
        'components.right-img-left-content',
        'components.middle-heddec-left-img-right-content',
        'components.middle-hed-dec',
        'components.middle-hed-cards',
        'components.link',
        'components.left-img-right-content',
        'components.home-page-awards',
        'components.home-footer',
        'components.footer-main',
        'components.footer-above-from',
        'components.exceptional-memory-care',
        'components.city-list',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.card-icon-box',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.begin-your-senior-s-journey-with-us-heading',
        'components.banner-hero'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::carson-veteran-care.carson-veteran-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::carson-veteran-care.carson-veteran-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCastleHillCastleHill extends Schema.CollectionType {
  collectionName: 'castle_hills';
  info: {
    singularName: 'castle-hill';
    pluralName: 'castle-hills';
    displayName: 'Redding - Castle Hill';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'layout.begin-your-senior-s-journey-with-us',
        'components.when-is-the-right-time',
        'components.subcity-caregivers',
        'components.services-list-home',
        'components.services-home-list-all',
        'components.services-banner',
        'components.servicelist-banner',
        'components.service-list-head',
        'components.service-city-list',
        'components.right-img-left-content',
        'components.middle-heddec-left-img-right-content',
        'components.middle-hed-dec',
        'components.middle-hed-cards',
        'components.link',
        'components.left-img-right-content',
        'components.home-page-awards',
        'components.home-footer',
        'components.footer-main',
        'components.footer-above-from',
        'components.exceptional-memory-care',
        'components.city-list',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.card-icon-box',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.begin-your-senior-s-journey-with-us-heading',
        'components.banner-hero'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::castle-hill.castle-hill',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::castle-hill.castle-hill',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiChicoChico extends Schema.CollectionType {
  collectionName: 'chicos';
  info: {
    singularName: 'chico';
    pluralName: 'chicos';
    displayName: 'Chico';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'layout.begin-your-senior-s-journey-with-us',
        'components.when-is-the-right-time',
        'components.subcity-caregivers',
        'components.services-list-home',
        'components.services-home-list-all',
        'components.services-banner',
        'components.servicelist-banner',
        'components.service-list-head',
        'components.service-city-list',
        'components.right-img-left-content',
        'components.middle-heddec-left-img-right-content',
        'components.middle-hed-dec',
        'components.middle-hed-cards',
        'components.link',
        'components.left-img-right-content',
        'components.home-page-awards',
        'components.home-footer',
        'components.footer-main',
        'components.footer-above-from',
        'components.exceptional-memory-care',
        'components.city-list',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.card-icon-box',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.begin-your-senior-s-journey-with-us-heading',
        'components.banner-hero'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::chico.chico',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::chico.chico',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiChico24HourCareChico24HourCare
  extends Schema.CollectionType {
  collectionName: 'chico_24_hour_cares';
  info: {
    singularName: 'chico-24-hour-care';
    pluralName: 'chico-24-hour-cares';
    displayName: 'Chico - 24 Hour Care';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'layout.begin-your-senior-s-journey-with-us',
        'components.when-is-the-right-time',
        'components.subcity-caregivers',
        'components.services-list-home',
        'components.services-home-list-all',
        'components.services-cards',
        'components.services-banner',
        'components.servicelist-banner',
        'components.service-list-head',
        'components.service-city-list',
        'components.right-img-left-content',
        'components.middle-heddec-left-img-right-content',
        'components.middle-hed-dec',
        'components.middle-hed-cards',
        'components.link',
        'components.left-img-right-content',
        'components.home-page-awards',
        'components.home-footer',
        'components.footer-main',
        'components.footer-above-from',
        'components.exceptional-memory-care',
        'components.city-list',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.card-icon-box',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.begin-your-senior-s-journey-with-us-heading',
        'components.banner-hero'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::chico-24-hour-care.chico-24-hour-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::chico-24-hour-care.chico-24-hour-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiChicoAlzheimerSAndDementiaCareChicoAlzheimerSAndDementiaCare
  extends Schema.CollectionType {
  collectionName: 'chico_alzheimer_s_and_dementia_cares';
  info: {
    singularName: 'chico-alzheimer-s-and-dementia-care';
    pluralName: 'chico-alzheimer-s-and-dementia-cares';
    displayName: "Chico - Alzheimer's & Dementia Care";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'layout.begin-your-senior-s-journey-with-us',
        'components.when-is-the-right-time',
        'components.subcity-caregivers',
        'components.services-list-home',
        'components.services-home-list-all',
        'components.services-cards',
        'components.services-banner',
        'components.servicelist-banner',
        'components.service-list-head',
        'components.service-city-list',
        'components.right-img-left-content',
        'components.middle-heddec-left-img-right-content',
        'components.middle-hed-dec',
        'components.middle-hed-cards',
        'components.link',
        'components.left-img-right-content',
        'components.home-page-awards',
        'components.home-footer',
        'components.footer-main',
        'components.footer-above-from',
        'components.exceptional-memory-care',
        'components.city-list',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.card-icon-box',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.begin-your-senior-s-journey-with-us-heading',
        'components.banner-hero'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::chico-alzheimer-s-and-dementia-care.chico-alzheimer-s-and-dementia-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::chico-alzheimer-s-and-dementia-care.chico-alzheimer-s-and-dementia-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiChicoCompanionCareChicoCompanionCare
  extends Schema.CollectionType {
  collectionName: 'chico_companion_cares';
  info: {
    singularName: 'chico-companion-care';
    pluralName: 'chico-companion-cares';
    displayName: 'Chico - Companion Care';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'layout.begin-your-senior-s-journey-with-us',
        'components.when-is-the-right-time',
        'components.subcity-caregivers',
        'components.services-list-home',
        'components.services-home-list-all',
        'components.services-cards',
        'components.services-banner',
        'components.servicelist-banner',
        'components.service-list-head',
        'components.service-city-list',
        'components.right-img-left-content',
        'components.middle-heddec-left-img-right-content',
        'components.middle-hed-dec',
        'components.middle-hed-cards',
        'components.link',
        'components.left-img-right-content',
        'components.home-page-awards',
        'components.home-footer',
        'components.footer-main',
        'components.footer-above-from',
        'components.exceptional-memory-care',
        'components.city-list',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.card-icon-box',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.begin-your-senior-s-journey-with-us-heading',
        'components.banner-hero'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::chico-companion-care.chico-companion-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::chico-companion-care.chico-companion-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiChicoPersonalCareChicoPersonalCare
  extends Schema.CollectionType {
  collectionName: 'chico_personal_cares';
  info: {
    singularName: 'chico-personal-care';
    pluralName: 'chico-personal-cares';
    displayName: 'Chico - Personal Care';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'layout.begin-your-senior-s-journey-with-us',
        'components.when-is-the-right-time',
        'components.subcity-caregivers',
        'components.services-list-home',
        'components.services-home-list-all',
        'components.services-cards',
        'components.services-banner',
        'components.servicelist-banner',
        'components.service-list-head',
        'components.service-city-list',
        'components.right-img-left-content',
        'components.middle-heddec-left-img-right-content',
        'components.middle-hed-dec',
        'components.middle-hed-cards',
        'components.link',
        'components.left-img-right-content',
        'components.home-page-awards',
        'components.home-footer',
        'components.footer-main',
        'components.footer-above-from',
        'components.exceptional-memory-care',
        'components.city-list',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.card-icon-box',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.begin-your-senior-s-journey-with-us-heading',
        'components.banner-hero'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::chico-personal-care.chico-personal-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::chico-personal-care.chico-personal-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiChicoRespiteCareChicoRespiteCare
  extends Schema.CollectionType {
  collectionName: 'chico_respite_cares';
  info: {
    singularName: 'chico-respite-care';
    pluralName: 'chico-respite-cares';
    displayName: 'Chico - Respite Care';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'components.when-is-the-right-time',
        'components.subcity-caregivers',
        'components.services-list-home',
        'components.services-home-list-all',
        'components.services-cards',
        'components.services-banner',
        'components.servicelist-banner',
        'components.service-list-head',
        'components.service-city-list',
        'components.right-img-left-content',
        'components.middle-heddec-left-img-right-content',
        'components.middle-hed-dec',
        'components.middle-hed-cards',
        'components.link',
        'components.left-img-right-content',
        'components.home-page-awards',
        'components.home-footer',
        'components.footer-main',
        'components.footer-above-from',
        'components.exceptional-memory-care',
        'components.city-list',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.card-icon-box',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.begin-your-senior-s-journey-with-us-heading',
        'components.banner-hero',
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'layout.begin-your-senior-s-journey-with-us'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::chico-respite-care.chico-respite-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::chico-respite-care.chico-respite-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiChicoVeteranCareChicoVeteranCare
  extends Schema.CollectionType {
  collectionName: 'chico_veteran_cares';
  info: {
    singularName: 'chico-veteran-care';
    pluralName: 'chico-veteran-cares';
    displayName: 'Chico - Veteran Care';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'components.when-is-the-right-time',
        'components.subcity-caregivers',
        'components.services-list-home',
        'components.services-home-list-all',
        'components.services-cards',
        'components.services-banner',
        'components.servicelist-banner',
        'components.service-list-head',
        'components.service-city-list',
        'components.right-img-left-content',
        'components.middle-heddec-left-img-right-content',
        'components.middle-hed-dec',
        'components.middle-hed-cards',
        'components.link',
        'components.left-img-right-content',
        'components.home-page-awards',
        'components.home-footer',
        'components.footer-main',
        'components.footer-above-from',
        'components.exceptional-memory-care',
        'components.city-list',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.card-icon-box',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.begin-your-senior-s-journey-with-us-heading',
        'components.banner-hero',
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'layout.begin-your-senior-s-journey-with-us'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::chico-veteran-care.chico-veteran-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::chico-veteran-care.chico-veteran-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCompanionCareServiceCompanionCareService
  extends Schema.SingleType {
  collectionName: 'companion_care_services';
  info: {
    singularName: 'companion-care-service';
    pluralName: 'companion-care-services';
    displayName: 'Companion care Service';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'components.when-is-the-right-time',
        'components.link',
        'components.exceptional-memory-care',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.banner-hero',
        'layout.begin-your-senior-s-journey-with-us',
        'components.footer-main',
        'components.footer-above-from',
        'components.begin-your-senior-s-journey-with-us-heading'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::companion-care-service.companion-care-service',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::companion-care-service.companion-care-service',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiContactFromContactFrom extends Schema.CollectionType {
  collectionName: 'contact_froms';
  info: {
    singularName: 'contact-from';
    pluralName: 'contact-froms';
    displayName: 'Contact-From';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    phoneNumber: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 10;
        maxLength: 12;
      }>;
    city: Attribute.String & Attribute.Required;
    service: Attribute.Enumeration<
      [
        "Alzheimer's & Dementia Care",
        'Companion Care',
        'Personal Care',
        'Respite Care',
        'Veteran Care',
        'Twenty four Hour Home Care'
      ]
    > &
      Attribute.Required;
    howwecanhelpyou: Attribute.Text & Attribute.Required;
    email: Attribute.Email & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::contact-from.contact-from',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::contact-from.contact-from',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCottonwoodCottonwood extends Schema.CollectionType {
  collectionName: 'cottonwoods';
  info: {
    singularName: 'cottonwood';
    pluralName: 'cottonwoods';
    displayName: 'Redding - Cottonwood';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'components.when-is-the-right-time',
        'components.subcity-caregivers',
        'components.services-list-home',
        'components.services-home-list-all',
        'components.services-banner',
        'components.servicelist-banner',
        'components.service-list-head',
        'components.service-city-list',
        'components.right-img-left-content',
        'components.middle-heddec-left-img-right-content',
        'components.middle-hed-dec',
        'components.middle-hed-cards',
        'components.link',
        'components.left-img-right-content',
        'components.home-page-awards',
        'components.home-footer',
        'components.footer-main',
        'components.footer-above-from',
        'components.exceptional-memory-care',
        'components.city-list',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.card-icon-box',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.begin-your-senior-s-journey-with-us-heading',
        'components.banner-hero',
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'layout.begin-your-senior-s-journey-with-us'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cottonwood.cottonwood',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::cottonwood.cottonwood',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCupertinoCaCupertinoCa extends Schema.CollectionType {
  collectionName: 'cupertino_cas';
  info: {
    singularName: 'cupertino-ca';
    pluralName: 'cupertino-cas';
    displayName: 'San Jose - Cupertino, CA';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'layout.begin-your-senior-s-journey-with-us',
        'components.when-is-the-right-time',
        'components.services-banner',
        'components.servicelist-banner',
        'components.right-img-left-content',
        'components.middle-heddec-left-img-right-content',
        'components.middle-hed-dec',
        'components.link',
        'components.left-img-right-content',
        'components.footer-main',
        'components.footer-above-from',
        'components.exceptional-memory-care',
        'components.city-list',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.begin-your-senior-s-journey-with-us-heading',
        'components.banner-hero',
        'components.service-city-list'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cupertino-ca.cupertino-ca',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::cupertino-ca.cupertino-ca',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiDiabeticsCareDiabeticsCare extends Schema.SingleType {
  collectionName: 'diabetics_cares';
  info: {
    singularName: 'diabetics-care';
    pluralName: 'diabetics-cares';
    displayName: 'Diabetics Care';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'layout.begin-your-senior-s-journey-with-us',
        'components.when-is-the-right-time',
        'components.subcity-caregivers',
        'components.services-list-home',
        'components.services-home-list-all',
        'components.services-banner',
        'components.servicelist-banner',
        'components.service-list-head',
        'components.service-city-list',
        'components.right-img-left-content',
        'components.middle-heddec-left-img-right-content',
        'components.middle-hed-dec',
        'components.middle-hed-cards',
        'components.link',
        'components.left-img-right-content',
        'components.home-page-awards',
        'components.home-footer',
        'components.footer-main',
        'components.footer-above-from',
        'components.exceptional-memory-care',
        'components.city-list',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.card-icon-box',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.begin-your-senior-s-journey-with-us-heading',
        'components.banner-hero'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::diabetics-care.diabetics-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::diabetics-care.diabetics-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiEvergreenCaEvergreenCa extends Schema.CollectionType {
  collectionName: 'evergreen_cas';
  info: {
    singularName: 'evergreen-ca';
    pluralName: 'evergreen-cas';
    displayName: 'San Jose - Evergreen, CA ';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'layout.begin-your-senior-s-journey-with-us',
        'components.when-is-the-right-time',
        'components.services-banner',
        'components.servicelist-banner',
        'components.right-img-left-content',
        'components.middle-heddec-left-img-right-content',
        'components.middle-hed-dec',
        'components.link',
        'components.left-img-right-content',
        'components.footer-main',
        'components.footer-above-from',
        'components.exceptional-memory-care',
        'components.city-list',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.begin-your-senior-s-journey-with-us-heading',
        'components.banner-hero',
        'components.service-city-list'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::evergreen-ca.evergreen-ca',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::evergreen-ca.evergreen-ca',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiGrantPassGrantPass extends Schema.CollectionType {
  collectionName: 'grant_passes';
  info: {
    singularName: 'grant-pass';
    pluralName: 'grant-passes';
    displayName: 'Grant Pass';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'layout.begin-your-senior-s-journey-with-us',
        'components.when-is-the-right-time',
        'components.subcity-caregivers',
        'components.services-list-home',
        'components.services-home-list-all',
        'components.services-banner',
        'components.servicelist-banner',
        'components.service-list-head',
        'components.service-city-list',
        'components.right-img-left-content',
        'components.middle-heddec-left-img-right-content',
        'components.middle-hed-dec',
        'components.middle-hed-cards',
        'components.link',
        'components.left-img-right-content',
        'components.home-page-awards',
        'components.home-footer',
        'components.footer-main',
        'components.footer-above-from',
        'components.exceptional-memory-care',
        'components.city-list',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.card-icon-box',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.begin-your-senior-s-journey-with-us-heading',
        'components.banner-hero'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::grant-pass.grant-pass',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::grant-pass.grant-pass',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiGrantPass24HourHomeCareGrantPass24HourHomeCare
  extends Schema.CollectionType {
  collectionName: 'grant_pass_24_hour_home_cares';
  info: {
    singularName: 'grant-pass-24-hour-home-care';
    pluralName: 'grant-pass-24-hour-home-cares';
    displayName: 'Grant Pass - 24 Hour Home Care';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'layout.begin-your-senior-s-journey-with-us',
        'components.when-is-the-right-time',
        'components.subcity-caregivers',
        'components.services-list-home',
        'components.services-home-list-all',
        'components.services-cards',
        'components.services-banner',
        'components.servicelist-banner',
        'components.service-list-head',
        'components.service-city-list',
        'components.right-img-left-content',
        'components.middle-heddec-left-img-right-content',
        'components.middle-hed-dec',
        'components.middle-hed-cards',
        'components.link',
        'components.left-img-right-content',
        'components.home-page-awards',
        'components.home-footer',
        'components.footer-main',
        'components.footer-above-from',
        'components.exceptional-memory-care',
        'components.city-list',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.card-icon-box',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.begin-your-senior-s-journey-with-us-heading',
        'components.banner-hero'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::grant-pass-24-hour-home-care.grant-pass-24-hour-home-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::grant-pass-24-hour-home-care.grant-pass-24-hour-home-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiGrantPassAlzheimerSAndDementiaCareGrantPassAlzheimerSAndDementiaCare
  extends Schema.CollectionType {
  collectionName: 'grant_pass_alzheimer_s_and_dementia_cares';
  info: {
    singularName: 'grant-pass-alzheimer-s-and-dementia-care';
    pluralName: 'grant-pass-alzheimer-s-and-dementia-cares';
    displayName: 'Grant Pass - Alzheimer\u2019s & Dementia Care';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'layout.begin-your-senior-s-journey-with-us',
        'components.when-is-the-right-time',
        'components.subcity-caregivers',
        'components.services-list-home',
        'components.services-home-list-all',
        'components.services-cards',
        'components.services-banner',
        'components.servicelist-banner',
        'components.service-list-head',
        'components.service-city-list',
        'components.right-img-left-content',
        'components.middle-heddec-left-img-right-content',
        'components.middle-hed-dec',
        'components.middle-hed-cards',
        'components.link',
        'components.left-img-right-content',
        'components.home-page-awards',
        'components.home-footer',
        'components.footer-main',
        'components.footer-above-from',
        'components.exceptional-memory-care',
        'components.city-list',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.card-icon-box',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.begin-your-senior-s-journey-with-us-heading',
        'components.banner-hero'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::grant-pass-alzheimer-s-and-dementia-care.grant-pass-alzheimer-s-and-dementia-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::grant-pass-alzheimer-s-and-dementia-care.grant-pass-alzheimer-s-and-dementia-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiGrantPassCompanionCareGrantPassCompanionCare
  extends Schema.CollectionType {
  collectionName: 'grant_pass_companion_cares';
  info: {
    singularName: 'grant-pass-companion-care';
    pluralName: 'grant-pass-companion-cares';
    displayName: 'Grant Pass - Companion Care';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'layout.begin-your-senior-s-journey-with-us',
        'components.when-is-the-right-time',
        'components.subcity-caregivers',
        'components.services-list-home',
        'components.services-home-list-all',
        'components.services-cards',
        'components.services-banner',
        'components.servicelist-banner',
        'components.service-list-head',
        'components.service-city-list',
        'components.right-img-left-content',
        'components.middle-heddec-left-img-right-content',
        'components.middle-hed-dec',
        'components.middle-hed-cards',
        'components.link',
        'components.left-img-right-content',
        'components.home-page-awards',
        'components.home-footer',
        'components.footer-main',
        'components.footer-above-from',
        'components.exceptional-memory-care',
        'components.city-list',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.card-icon-box',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.begin-your-senior-s-journey-with-us-heading',
        'components.banner-hero'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::grant-pass-companion-care.grant-pass-companion-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::grant-pass-companion-care.grant-pass-companion-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiGrantPassPersonalCareGrantPassPersonalCare
  extends Schema.CollectionType {
  collectionName: 'grant_pass_personal_cares';
  info: {
    singularName: 'grant-pass-personal-care';
    pluralName: 'grant-pass-personal-cares';
    displayName: 'Grant Pass - Personal Care';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'layout.begin-your-senior-s-journey-with-us',
        'components.when-is-the-right-time',
        'components.subcity-caregivers',
        'components.services-list-home',
        'components.services-home-list-all',
        'components.services-cards',
        'components.services-banner',
        'components.servicelist-banner',
        'components.service-list-head',
        'components.service-city-list',
        'components.right-img-left-content',
        'components.middle-heddec-left-img-right-content',
        'components.middle-hed-dec',
        'components.middle-hed-cards',
        'components.link',
        'components.left-img-right-content',
        'components.home-page-awards',
        'components.home-footer',
        'components.footer-main',
        'components.footer-above-from',
        'components.exceptional-memory-care',
        'components.city-list',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.card-icon-box',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.begin-your-senior-s-journey-with-us-heading',
        'components.banner-hero'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::grant-pass-personal-care.grant-pass-personal-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::grant-pass-personal-care.grant-pass-personal-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiGrantPassRespiteCareGrantPassRespiteCare
  extends Schema.CollectionType {
  collectionName: 'grant_pass_respite_cares';
  info: {
    singularName: 'grant-pass-respite-care';
    pluralName: 'grant-pass-respite-cares';
    displayName: 'Grant Pass - Respite Care';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'components.when-is-the-right-time',
        'components.subcity-caregivers',
        'components.services-list-home',
        'components.services-home-list-all',
        'components.services-cards',
        'components.services-banner',
        'components.servicelist-banner',
        'components.service-list-head',
        'components.service-city-list',
        'components.right-img-left-content',
        'components.middle-heddec-left-img-right-content',
        'components.middle-hed-dec',
        'components.middle-hed-cards',
        'components.link',
        'components.left-img-right-content',
        'components.home-page-awards',
        'components.home-footer',
        'components.footer-main',
        'components.footer-above-from',
        'components.exceptional-memory-care',
        'components.city-list',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.card-icon-box',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.begin-your-senior-s-journey-with-us-heading',
        'components.banner-hero',
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'layout.begin-your-senior-s-journey-with-us'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::grant-pass-respite-care.grant-pass-respite-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::grant-pass-respite-care.grant-pass-respite-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiGrantPassVeteranCareGrantPassVeteranCare
  extends Schema.SingleType {
  collectionName: 'grant_pass_veteran_cares';
  info: {
    singularName: 'grant-pass-veteran-care';
    pluralName: 'grant-pass-veteran-cares';
    displayName: 'Grant Pass - Veteran Care';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'components.when-is-the-right-time',
        'components.subcity-caregivers',
        'components.services-list-home',
        'components.services-home-list-all',
        'components.services-cards',
        'components.services-banner',
        'components.servicelist-banner',
        'components.service-list-head',
        'components.service-city-list',
        'components.right-img-left-content',
        'components.middle-heddec-left-img-right-content',
        'components.middle-hed-dec',
        'components.middle-hed-cards',
        'components.link',
        'components.left-img-right-content',
        'components.home-page-awards',
        'components.home-footer',
        'components.footer-main',
        'components.footer-above-from',
        'components.exceptional-memory-care',
        'components.city-list',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.card-icon-box',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.begin-your-senior-s-journey-with-us-heading',
        'components.banner-hero',
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'layout.begin-your-senior-s-journey-with-us'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::grant-pass-veteran-care.grant-pass-veteran-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::grant-pass-veteran-care.grant-pass-veteran-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiGrassValleyGrassValley extends Schema.CollectionType {
  collectionName: 'grass_valleys';
  info: {
    singularName: 'grass-valley';
    pluralName: 'grass-valleys';
    displayName: 'Grass Valley';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'layout.begin-your-senior-s-journey-with-us',
        'components.when-is-the-right-time',
        'components.subcity-caregivers',
        'components.services-list-home',
        'components.services-home-list-all',
        'components.services-banner',
        'components.servicelist-banner',
        'components.service-list-head',
        'components.service-city-list',
        'components.right-img-left-content',
        'components.middle-heddec-left-img-right-content',
        'components.middle-hed-dec',
        'components.middle-hed-cards',
        'components.link',
        'components.left-img-right-content',
        'components.home-page-awards',
        'components.home-footer',
        'components.footer-main',
        'components.footer-above-from',
        'components.exceptional-memory-care',
        'components.city-list',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.card-icon-box',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.begin-your-senior-s-journey-with-us-heading',
        'components.banner-hero'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::grass-valley.grass-valley',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::grass-valley.grass-valley',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiGrassValley24HourCareGrassValley24HourCare
  extends Schema.CollectionType {
  collectionName: 'grass_valley_24_hour_cares';
  info: {
    singularName: 'grass-valley-24-hour-care';
    pluralName: 'grass-valley-24-hour-cares';
    displayName: 'Grass Valley - 24 Hour Care';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'layout.begin-your-senior-s-journey-with-us',
        'components.when-is-the-right-time',
        'components.subcity-caregivers',
        'components.services-list-home',
        'components.services-home-list-all',
        'components.services-cards',
        'components.services-banner',
        'components.servicelist-banner',
        'components.service-list-head',
        'components.service-city-list',
        'components.right-img-left-content',
        'components.middle-heddec-left-img-right-content',
        'components.middle-hed-dec',
        'components.middle-hed-cards',
        'components.link',
        'components.left-img-right-content',
        'components.home-page-awards',
        'components.home-footer',
        'components.footer-main',
        'components.footer-above-from',
        'components.exceptional-memory-care',
        'components.city-list',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.card-icon-box',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.begin-your-senior-s-journey-with-us-heading',
        'components.banner-hero'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::grass-valley-24-hour-care.grass-valley-24-hour-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::grass-valley-24-hour-care.grass-valley-24-hour-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiGrassValleyAlzheimerSAndDementiaCareGrassValleyAlzheimerSAndDementiaCare
  extends Schema.CollectionType {
  collectionName: 'grass_valley_alzheimer_s_and_dementia_cares';
  info: {
    singularName: 'grass-valley-alzheimer-s-and-dementia-care';
    pluralName: 'grass-valley-alzheimer-s-and-dementia-cares';
    displayName: 'Grass Valley - Alzheimer\u2019s & Dementia Care';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'layout.begin-your-senior-s-journey-with-us',
        'components.when-is-the-right-time',
        'components.subcity-caregivers',
        'components.services-list-home',
        'components.services-home-list-all',
        'components.services-cards',
        'components.services-banner',
        'components.servicelist-banner',
        'components.service-list-head',
        'components.service-city-list',
        'components.right-img-left-content',
        'components.middle-heddec-left-img-right-content',
        'components.middle-hed-dec',
        'components.middle-hed-cards',
        'components.link',
        'components.left-img-right-content',
        'components.home-page-awards',
        'components.home-footer',
        'components.footer-main',
        'components.footer-above-from',
        'components.exceptional-memory-care',
        'components.city-list',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.card-icon-box',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.begin-your-senior-s-journey-with-us-heading',
        'components.banner-hero'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::grass-valley-alzheimer-s-and-dementia-care.grass-valley-alzheimer-s-and-dementia-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::grass-valley-alzheimer-s-and-dementia-care.grass-valley-alzheimer-s-and-dementia-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiGrassValleyCompanionCareGrassValleyCompanionCare
  extends Schema.CollectionType {
  collectionName: 'grass_valley_companion_cares';
  info: {
    singularName: 'grass-valley-companion-care';
    pluralName: 'grass-valley-companion-cares';
    displayName: 'Grass Valley - Companion Care';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'layout.begin-your-senior-s-journey-with-us',
        'components.when-is-the-right-time',
        'components.subcity-caregivers',
        'components.services-list-home',
        'components.services-home-list-all',
        'components.services-cards',
        'components.services-banner',
        'components.servicelist-banner',
        'components.service-list-head',
        'components.service-city-list',
        'components.right-img-left-content',
        'components.middle-heddec-left-img-right-content',
        'components.middle-hed-dec',
        'components.middle-hed-cards',
        'components.link',
        'components.left-img-right-content',
        'components.home-page-awards',
        'components.home-footer',
        'components.footer-main',
        'components.footer-above-from',
        'components.exceptional-memory-care',
        'components.city-list',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.card-icon-box',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.begin-your-senior-s-journey-with-us-heading',
        'components.banner-hero'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::grass-valley-companion-care.grass-valley-companion-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::grass-valley-companion-care.grass-valley-companion-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiGrassValleyPersonalCareGrassValleyPersonalCare
  extends Schema.CollectionType {
  collectionName: 'grass_valley_personal_cares';
  info: {
    singularName: 'grass-valley-personal-care';
    pluralName: 'grass-valley-personal-cares';
    displayName: 'Grass Valley - Personal Care';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'components.when-is-the-right-time',
        'components.subcity-caregivers',
        'components.services-list-home',
        'components.services-home-list-all',
        'components.services-cards',
        'components.services-banner',
        'components.servicelist-banner',
        'components.service-list-head',
        'components.service-city-list',
        'components.right-img-left-content',
        'components.middle-heddec-left-img-right-content',
        'components.middle-hed-dec',
        'components.middle-hed-cards',
        'components.link',
        'components.left-img-right-content',
        'components.home-page-awards',
        'components.home-footer',
        'components.footer-main',
        'components.footer-above-from',
        'components.exceptional-memory-care',
        'components.city-list',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.card-icon-box',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.begin-your-senior-s-journey-with-us-heading',
        'components.banner-hero',
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'layout.begin-your-senior-s-journey-with-us'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::grass-valley-personal-care.grass-valley-personal-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::grass-valley-personal-care.grass-valley-personal-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiGrassValleyRespiteCareGrassValleyRespiteCare
  extends Schema.CollectionType {
  collectionName: 'grass_valley_respite_cares';
  info: {
    singularName: 'grass-valley-respite-care';
    pluralName: 'grass-valley-respite-cares';
    displayName: 'Grass Valley - Respite Care';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'layout.begin-your-senior-s-journey-with-us',
        'components.when-is-the-right-time',
        'components.subcity-caregivers',
        'components.services-list-home',
        'components.services-home-list-all',
        'components.services-cards',
        'components.services-banner',
        'components.servicelist-banner',
        'components.service-list-head',
        'components.service-city-list',
        'components.right-img-left-content',
        'components.middle-heddec-left-img-right-content',
        'components.middle-hed-dec',
        'components.middle-hed-cards',
        'components.link',
        'components.left-img-right-content',
        'components.home-page-awards',
        'components.home-footer',
        'components.footer-main',
        'components.footer-above-from',
        'components.exceptional-memory-care',
        'components.city-list',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.card-icon-box',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.begin-your-senior-s-journey-with-us-heading',
        'components.banner-hero'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::grass-valley-respite-care.grass-valley-respite-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::grass-valley-respite-care.grass-valley-respite-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiGrassValleyVeteranCareGrassValleyVeteranCare
  extends Schema.CollectionType {
  collectionName: 'grass_valley_veteran_cares';
  info: {
    singularName: 'grass-valley-veteran-care';
    pluralName: 'grass-valley-veteran-cares';
    displayName: 'Grass Valley - Veteran Care';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'layout.begin-your-senior-s-journey-with-us',
        'components.when-is-the-right-time',
        'components.subcity-caregivers',
        'components.services-list-home',
        'components.services-home-list-all',
        'components.services-cards',
        'components.services-banner',
        'components.servicelist-banner',
        'components.service-list-head',
        'components.service-city-list',
        'components.right-img-left-content',
        'components.middle-heddec-left-img-right-content',
        'components.middle-hed-dec',
        'components.middle-hed-cards',
        'components.link',
        'components.left-img-right-content',
        'components.home-page-awards',
        'components.home-footer',
        'components.footer-main',
        'components.footer-above-from',
        'components.exceptional-memory-care',
        'components.city-list',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.card-icon-box',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.begin-your-senior-s-journey-with-us-heading',
        'components.banner-hero'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::grass-valley-veteran-care.grass-valley-veteran-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::grass-valley-veteran-care.grass-valley-veteran-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHatCreekHatCreek extends Schema.CollectionType {
  collectionName: 'hat_creeks';
  info: {
    singularName: 'hat-creek';
    pluralName: 'hat-creeks';
    displayName: 'Redding - Hat Creek';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'layout.begin-your-senior-s-journey-with-us',
        'components.when-is-the-right-time',
        'components.subcity-caregivers',
        'components.services-list-home',
        'components.services-home-list-all',
        'components.services-banner',
        'components.servicelist-banner',
        'components.service-list-head',
        'components.service-city-list',
        'components.right-img-left-content',
        'components.middle-heddec-left-img-right-content',
        'components.middle-hed-dec',
        'components.middle-hed-cards',
        'components.link',
        'components.left-img-right-content',
        'components.home-page-awards',
        'components.home-footer',
        'components.footer-main',
        'components.footer-above-from',
        'components.exceptional-memory-care',
        'components.city-list',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.card-icon-box',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.begin-your-senior-s-journey-with-us-heading',
        'components.banner-hero'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::hat-creek.hat-creek',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::hat-creek.hat-creek',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHomeHome extends Schema.CollectionType {
  collectionName: 'homes';
  info: {
    singularName: 'home';
    pluralName: 'homes';
    displayName: 'Home';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'components.when-is-the-right-time',
        'components.subcity-caregivers',
        'components.services-list-home',
        'components.services-home-list-all',
        'components.services-banner',
        'components.servicelist-banner',
        'components.service-city-list',
        'components.right-img-left-content',
        'components.middle-heddec-left-img-right-content',
        'components.middle-hed-dec',
        'components.middle-hed-cards',
        'components.link',
        'components.left-img-right-content',
        'components.footer-main',
        'components.footer-above-from',
        'components.exceptional-memory-care',
        'components.city-list',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.card-icon-box',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.begin-your-senior-s-journey-with-us-heading',
        'components.banner-hero',
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'layout.begin-your-senior-s-journey-with-us',
        'components.home-page-awards',
        'components.home-footer'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::home.home', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::home.home', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiHospiceCareHospiceCare extends Schema.SingleType {
  collectionName: 'hospice_cares';
  info: {
    singularName: 'hospice-care';
    pluralName: 'hospice-cares';
    displayName: 'Hospice Care';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'layout.begin-your-senior-s-journey-with-us',
        'components.when-is-the-right-time',
        'components.subcity-caregivers',
        'components.services-list-home',
        'components.services-home-list-all',
        'components.services-banner',
        'components.servicelist-banner',
        'components.service-list-head',
        'components.service-city-list',
        'components.right-img-left-content',
        'components.middle-heddec-left-img-right-content',
        'components.middle-hed-dec',
        'components.middle-hed-cards',
        'components.link',
        'components.left-img-right-content',
        'components.home-page-awards',
        'components.home-footer',
        'components.footer-main',
        'components.footer-above-from',
        'components.exceptional-memory-care',
        'components.city-list',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.card-icon-box',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.begin-your-senior-s-journey-with-us-heading',
        'components.banner-hero'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::hospice-care.hospice-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::hospice-care.hospice-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiJohnsonParkJohnsonPark extends Schema.CollectionType {
  collectionName: 'johnson_parks';
  info: {
    singularName: 'johnson-park';
    pluralName: 'johnson-parks';
    displayName: 'Redding - Johnson Park';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'layout.begin-your-senior-s-journey-with-us',
        'components.when-is-the-right-time',
        'components.subcity-caregivers',
        'components.services-list-home',
        'components.services-home-list-all',
        'components.services-banner',
        'components.servicelist-banner',
        'components.service-list-head',
        'components.service-city-list',
        'components.right-img-left-content',
        'components.middle-heddec-left-img-right-content',
        'components.middle-hed-dec',
        'components.middle-hed-cards',
        'components.link',
        'components.left-img-right-content',
        'components.home-page-awards',
        'components.home-footer',
        'components.footer-main',
        'components.footer-above-from',
        'components.exceptional-memory-care',
        'components.city-list',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.card-icon-box',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.begin-your-senior-s-journey-with-us-heading',
        'components.banner-hero'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::johnson-park.johnson-park',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::johnson-park.johnson-park',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLosAltosCaliforniaLosAltosCalifornia
  extends Schema.CollectionType {
  collectionName: 'los_altos_californias';
  info: {
    singularName: 'los-altos-california';
    pluralName: 'los-altos-californias';
    displayName: 'San Jose - Los Altos, California ';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'layout.begin-your-senior-s-journey-with-us',
        'components.when-is-the-right-time',
        'components.services-banner',
        'components.servicelist-banner',
        'components.right-img-left-content',
        'components.middle-heddec-left-img-right-content',
        'components.middle-hed-dec',
        'components.link',
        'components.left-img-right-content',
        'components.footer-main',
        'components.footer-above-from',
        'components.exceptional-memory-care',
        'components.city-list',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.begin-your-senior-s-journey-with-us-heading',
        'components.banner-hero'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::los-altos-california.los-altos-california',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::los-altos-california.los-altos-california',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLosGatosCaliforniaLosGatosCalifornia
  extends Schema.CollectionType {
  collectionName: 'los_gatos_californias';
  info: {
    singularName: 'los-gatos-california';
    pluralName: 'los-gatos-californias';
    displayName: 'San Jose - Los Gatos, California';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'layout.begin-your-senior-s-journey-with-us',
        'components.when-is-the-right-time',
        'components.services-banner',
        'components.servicelist-banner',
        'components.right-img-left-content',
        'components.middle-heddec-left-img-right-content',
        'components.middle-hed-dec',
        'components.link',
        'components.left-img-right-content',
        'components.footer-main',
        'components.footer-above-from',
        'components.exceptional-memory-care',
        'components.city-list',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.begin-your-senior-s-journey-with-us-heading',
        'components.banner-hero'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::los-gatos-california.los-gatos-california',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::los-gatos-california.los-gatos-california',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMedfordMedford extends Schema.CollectionType {
  collectionName: 'medfords';
  info: {
    singularName: 'medford';
    pluralName: 'medfords';
    displayName: 'Medford';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'layout.begin-your-senior-s-journey-with-us',
        'components.when-is-the-right-time',
        'components.subcity-caregivers',
        'components.services-list-home',
        'components.services-home-list-all',
        'components.services-banner',
        'components.servicelist-banner',
        'components.service-list-head',
        'components.service-city-list',
        'components.right-img-left-content',
        'components.middle-heddec-left-img-right-content',
        'components.middle-hed-dec',
        'components.middle-hed-cards',
        'components.link',
        'components.left-img-right-content',
        'components.home-page-awards',
        'components.home-footer',
        'components.footer-main',
        'components.footer-above-from',
        'components.exceptional-memory-care',
        'components.city-list',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.card-icon-box',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.begin-your-senior-s-journey-with-us-heading',
        'components.banner-hero'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::medford.medford',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::medford.medford',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMedford24HourCareMedford24HourCare
  extends Schema.CollectionType {
  collectionName: 'medford_24_hour_cares';
  info: {
    singularName: 'medford-24-hour-care';
    pluralName: 'medford-24-hour-cares';
    displayName: 'Medford - 24 Hour Care';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'layout.begin-your-senior-s-journey-with-us',
        'components.when-is-the-right-time',
        'components.subcity-caregivers',
        'components.services-list-home',
        'components.services-home-list-all',
        'components.services-cards',
        'components.services-banner',
        'components.servicelist-banner',
        'components.service-list-head',
        'components.service-city-list',
        'components.right-img-left-content',
        'components.middle-heddec-left-img-right-content',
        'components.middle-hed-dec',
        'components.middle-hed-cards',
        'components.link',
        'components.left-img-right-content',
        'components.home-page-awards',
        'components.home-footer',
        'components.footer-main',
        'components.footer-above-from',
        'components.exceptional-memory-care',
        'components.city-list',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.card-icon-box',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.begin-your-senior-s-journey-with-us-heading',
        'components.banner-hero'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::medford-24-hour-care.medford-24-hour-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::medford-24-hour-care.medford-24-hour-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMedfordAlzheimerSAndDementiaCareMedfordAlzheimerSAndDementiaCare
  extends Schema.CollectionType {
  collectionName: 'medford_alzheimer_s_and_dementia_cares';
  info: {
    singularName: 'medford-alzheimer-s-and-dementia-care';
    pluralName: 'medford-alzheimer-s-and-dementia-cares';
    displayName: 'Medford - Alzheimer\u2019s & Dementia Care';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'layout.begin-your-senior-s-journey-with-us',
        'components.when-is-the-right-time',
        'components.subcity-caregivers',
        'components.services-list-home',
        'components.services-home-list-all',
        'components.services-cards',
        'components.services-banner',
        'components.servicelist-banner',
        'components.service-list-head',
        'components.service-city-list',
        'components.right-img-left-content',
        'components.middle-heddec-left-img-right-content',
        'components.middle-hed-dec',
        'components.middle-hed-cards',
        'components.link',
        'components.left-img-right-content',
        'components.home-page-awards',
        'components.home-footer',
        'components.footer-main',
        'components.footer-above-from',
        'components.exceptional-memory-care',
        'components.city-list',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.card-icon-box',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.begin-your-senior-s-journey-with-us-heading',
        'components.banner-hero'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::medford-alzheimer-s-and-dementia-care.medford-alzheimer-s-and-dementia-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::medford-alzheimer-s-and-dementia-care.medford-alzheimer-s-and-dementia-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMedfordCompanionCareMedfordCompanionCare
  extends Schema.CollectionType {
  collectionName: 'medford_companion_cares';
  info: {
    singularName: 'medford-companion-care';
    pluralName: 'medford-companion-cares';
    displayName: 'Medford - Companion Care';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'layout.begin-your-senior-s-journey-with-us',
        'components.when-is-the-right-time',
        'components.subcity-caregivers',
        'components.services-list-home',
        'components.services-home-list-all',
        'components.services-cards',
        'components.services-banner',
        'components.servicelist-banner',
        'components.service-list-head',
        'components.service-city-list',
        'components.right-img-left-content',
        'components.middle-heddec-left-img-right-content',
        'components.middle-hed-dec',
        'components.middle-hed-cards',
        'components.link',
        'components.left-img-right-content',
        'components.home-page-awards',
        'components.home-footer',
        'components.footer-main',
        'components.footer-above-from',
        'components.exceptional-memory-care',
        'components.city-list',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.card-icon-box',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.begin-your-senior-s-journey-with-us-heading',
        'components.banner-hero'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::medford-companion-care.medford-companion-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::medford-companion-care.medford-companion-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMedfordPersonalCareMedfordPersonalCare
  extends Schema.CollectionType {
  collectionName: 'medford_personal_cares';
  info: {
    singularName: 'medford-personal-care';
    pluralName: 'medford-personal-cares';
    displayName: 'Medford - Personal Care';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'layout.begin-your-senior-s-journey-with-us',
        'components.when-is-the-right-time',
        'components.subcity-caregivers',
        'components.services-list-home',
        'components.services-home-list-all',
        'components.services-cards',
        'components.services-banner',
        'components.servicelist-banner',
        'components.service-list-head',
        'components.service-city-list',
        'components.right-img-left-content',
        'components.middle-heddec-left-img-right-content',
        'components.middle-hed-dec',
        'components.middle-hed-cards',
        'components.link',
        'components.left-img-right-content',
        'components.home-page-awards',
        'components.home-footer',
        'components.footer-main',
        'components.footer-above-from',
        'components.exceptional-memory-care',
        'components.city-list',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.card-icon-box',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.begin-your-senior-s-journey-with-us-heading',
        'components.banner-hero'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::medford-personal-care.medford-personal-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::medford-personal-care.medford-personal-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMedfordRespiteCareMedfordRespiteCare
  extends Schema.CollectionType {
  collectionName: 'medford_respite_cares';
  info: {
    singularName: 'medford-respite-care';
    pluralName: 'medford-respite-cares';
    displayName: 'Medford - Respite Care';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'layout.begin-your-senior-s-journey-with-us',
        'components.when-is-the-right-time',
        'components.subcity-caregivers',
        'components.services-list-home',
        'components.services-home-list-all',
        'components.services-cards',
        'components.services-banner',
        'components.servicelist-banner',
        'components.service-list-head',
        'components.service-city-list',
        'components.right-img-left-content',
        'components.middle-heddec-left-img-right-content',
        'components.middle-hed-dec',
        'components.middle-hed-cards',
        'components.link',
        'components.left-img-right-content',
        'components.home-page-awards',
        'components.home-footer',
        'components.footer-main',
        'components.footer-above-from',
        'components.exceptional-memory-care',
        'components.city-list',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.card-icon-box',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.begin-your-senior-s-journey-with-us-heading',
        'components.banner-hero'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::medford-respite-care.medford-respite-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::medford-respite-care.medford-respite-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMedfordVeteranCareMedfordVeteranCare
  extends Schema.CollectionType {
  collectionName: 'medford_veteran_cares';
  info: {
    singularName: 'medford-veteran-care';
    pluralName: 'medford-veteran-cares';
    displayName: 'Medford - Veteran Care';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'components.when-is-the-right-time',
        'components.subcity-caregivers',
        'components.services-list-home',
        'components.services-home-list-all',
        'components.services-cards',
        'components.services-banner',
        'components.servicelist-banner',
        'components.service-list-head',
        'components.service-city-list',
        'components.right-img-left-content',
        'components.middle-heddec-left-img-right-content',
        'components.middle-hed-dec',
        'components.middle-hed-cards',
        'components.link',
        'components.left-img-right-content',
        'components.home-page-awards',
        'components.home-footer',
        'components.footer-main',
        'components.footer-above-from',
        'components.exceptional-memory-care',
        'components.city-list',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.card-icon-box',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.begin-your-senior-s-journey-with-us-heading',
        'components.banner-hero',
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'layout.begin-your-senior-s-journey-with-us'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::medford-veteran-care.medford-veteran-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::medford-veteran-care.medford-veteran-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMilpitasCaliforniaMilpitasCalifornia
  extends Schema.CollectionType {
  collectionName: 'milpitas_californias';
  info: {
    singularName: 'milpitas-california';
    pluralName: 'milpitas-californias';
    displayName: 'San Jose - Milpitas, California ';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'layout.begin-your-senior-s-journey-with-us',
        'components.when-is-the-right-time',
        'components.services-banner',
        'components.servicelist-banner',
        'components.right-img-left-content',
        'components.middle-heddec-left-img-right-content',
        'components.middle-hed-dec',
        'components.link',
        'components.left-img-right-content',
        'components.footer-main',
        'components.footer-above-from',
        'components.exceptional-memory-care',
        'components.city-list',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.begin-your-senior-s-journey-with-us-heading',
        'components.banner-hero'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::milpitas-california.milpitas-california',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::milpitas-california.milpitas-california',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMontgomeryCreekMontgomeryCreek
  extends Schema.CollectionType {
  collectionName: 'montgomery_creeks';
  info: {
    singularName: 'montgomery-creek';
    pluralName: 'montgomery-creeks';
    displayName: 'Redding - Montgomery-Creek';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'components.when-is-the-right-time',
        'components.subcity-caregivers',
        'components.services-list-home',
        'components.services-home-list-all',
        'components.services-banner',
        'components.servicelist-banner',
        'components.service-list-head',
        'components.service-city-list',
        'components.right-img-left-content',
        'components.middle-heddec-left-img-right-content',
        'components.middle-hed-dec',
        'components.middle-hed-cards',
        'components.link',
        'components.left-img-right-content',
        'components.home-page-awards',
        'components.home-footer',
        'components.footer-main',
        'components.footer-above-from',
        'components.exceptional-memory-care',
        'components.city-list',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.card-icon-box',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.begin-your-senior-s-journey-with-us-heading',
        'components.banner-hero',
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'layout.begin-your-senior-s-journey-with-us'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::montgomery-creek.montgomery-creek',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::montgomery-creek.montgomery-creek',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMountainViewCaliforniaMountainViewCalifornia
  extends Schema.CollectionType {
  collectionName: 'mountain_view_californias';
  info: {
    singularName: 'mountain-view-california';
    pluralName: 'mountain-view-californias';
    displayName: 'Mountain View, California';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'layout.begin-your-senior-s-journey-with-us',
        'components.when-is-the-right-time',
        'components.services-banner',
        'components.servicelist-banner',
        'components.right-img-left-content',
        'components.middle-heddec-left-img-right-content',
        'components.middle-hed-dec',
        'components.link',
        'components.left-img-right-content',
        'components.footer-main',
        'components.footer-above-from',
        'components.exceptional-memory-care',
        'components.city-list',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.begin-your-senior-s-journey-with-us-heading',
        'components.banner-hero'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::mountain-view-california.mountain-view-california',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::mountain-view-california.mountain-view-california',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPalliativeCarePalliativeCare extends Schema.SingleType {
  collectionName: 'palliative_cares';
  info: {
    singularName: 'palliative-care';
    pluralName: 'palliative-cares';
    displayName: 'Palliative Care';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'layout.begin-your-senior-s-journey-with-us',
        'components.when-is-the-right-time',
        'components.subcity-caregivers',
        'components.services-list-home',
        'components.services-home-list-all',
        'components.services-banner',
        'components.servicelist-banner',
        'components.service-list-head',
        'components.service-city-list',
        'components.right-img-left-content',
        'components.middle-heddec-left-img-right-content',
        'components.middle-hed-dec',
        'components.middle-hed-cards',
        'components.link',
        'components.left-img-right-content',
        'components.home-page-awards',
        'components.home-footer',
        'components.footer-main',
        'components.footer-above-from',
        'components.exceptional-memory-care',
        'components.city-list',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.card-icon-box',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.begin-your-senior-s-journey-with-us-heading',
        'components.banner-hero'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::palliative-care.palliative-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::palliative-care.palliative-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPaloCedroPaloCedro extends Schema.CollectionType {
  collectionName: 'palo_cedros';
  info: {
    singularName: 'palo-cedro';
    pluralName: 'palo-cedros';
    displayName: 'Redding - Palo Cedro';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'layout.begin-your-senior-s-journey-with-us',
        'components.when-is-the-right-time',
        'components.subcity-caregivers',
        'components.services-list-home',
        'components.services-home-list-all',
        'components.services-banner',
        'components.servicelist-banner',
        'components.service-list-head',
        'components.service-city-list',
        'components.right-img-left-content',
        'components.middle-heddec-left-img-right-content',
        'components.middle-hed-dec',
        'components.middle-hed-cards',
        'components.link',
        'components.left-img-right-content',
        'components.home-page-awards',
        'components.home-footer',
        'components.footer-main',
        'components.footer-above-from',
        'components.exceptional-memory-care',
        'components.city-list',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.card-icon-box',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.begin-your-senior-s-journey-with-us-heading',
        'components.banner-hero'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::palo-cedro.palo-cedro',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::palo-cedro.palo-cedro',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPersonalCareServicePersonalCareService
  extends Schema.SingleType {
  collectionName: 'personal_care_services';
  info: {
    singularName: 'personal-care-service';
    pluralName: 'personal-care-services';
    displayName: 'Personal Care Service';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'components.when-is-the-right-time',
        'components.link',
        'components.exceptional-memory-care',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.banner-hero',
        'layout.begin-your-senior-s-journey-with-us',
        'components.footer-main',
        'components.footer-above-from',
        'components.begin-your-senior-s-journey-with-us-heading'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::personal-care-service.personal-care-service',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::personal-care-service.personal-care-service',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiRanchoTehamaRanchoTehama extends Schema.CollectionType {
  collectionName: 'rancho_tehamas';
  info: {
    singularName: 'rancho-tehama';
    pluralName: 'rancho-tehamas';
    displayName: 'Redding - Rancho Tehama';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'components.when-is-the-right-time',
        'components.subcity-caregivers',
        'components.services-list-home',
        'components.services-home-list-all',
        'components.services-banner',
        'components.servicelist-banner',
        'components.service-list-head',
        'components.service-city-list',
        'components.right-img-left-content',
        'components.middle-heddec-left-img-right-content',
        'components.middle-hed-dec',
        'components.middle-hed-cards',
        'components.link',
        'components.left-img-right-content',
        'components.home-page-awards',
        'components.home-footer',
        'components.footer-main',
        'components.footer-above-from',
        'components.exceptional-memory-care',
        'components.city-list',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.card-icon-box',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.begin-your-senior-s-journey-with-us-heading',
        'components.banner-hero',
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'layout.begin-your-senior-s-journey-with-us'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::rancho-tehama.rancho-tehama',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::rancho-tehama.rancho-tehama',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiReddingRedding extends Schema.CollectionType {
  collectionName: 'reddings';
  info: {
    singularName: 'redding';
    pluralName: 'reddings';
    displayName: 'Redding';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'layout.begin-your-senior-s-journey-with-us',
        'components.when-is-the-right-time',
        'components.subcity-caregivers',
        'components.services-list-home',
        'components.services-home-list-all',
        'components.services-banner',
        'components.servicelist-banner',
        'components.service-list-head',
        'components.service-city-list',
        'components.right-img-left-content',
        'components.middle-heddec-left-img-right-content',
        'components.middle-hed-dec',
        'components.middle-hed-cards',
        'components.link',
        'components.left-img-right-content',
        'components.home-page-awards',
        'components.home-footer',
        'components.footer-main',
        'components.footer-above-from',
        'components.exceptional-memory-care',
        'components.city-list',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.card-icon-box',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.begin-your-senior-s-journey-with-us-heading',
        'components.banner-hero'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::redding.redding',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::redding.redding',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiRenoReno extends Schema.CollectionType {
  collectionName: 'renos';
  info: {
    singularName: 'reno';
    pluralName: 'renos';
    displayName: 'Reno';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'layout.begin-your-senior-s-journey-with-us',
        'components.when-is-the-right-time',
        'components.subcity-caregivers',
        'components.services-list-home',
        'components.services-home-list-all',
        'components.services-banner',
        'components.servicelist-banner',
        'components.service-list-head',
        'components.service-city-list',
        'components.right-img-left-content',
        'components.middle-heddec-left-img-right-content',
        'components.middle-hed-dec',
        'components.middle-hed-cards',
        'components.link',
        'components.left-img-right-content',
        'components.home-page-awards',
        'components.home-footer',
        'components.footer-main',
        'components.footer-above-from',
        'components.exceptional-memory-care',
        'components.city-list',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.card-icon-box',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.begin-your-senior-s-journey-with-us-heading',
        'components.banner-hero'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::reno.reno', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::reno.reno', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiReno24HourCareReno24HourCare extends Schema.CollectionType {
  collectionName: 'reno_24_hour_cares';
  info: {
    singularName: 'reno-24-hour-care';
    pluralName: 'reno-24-hour-cares';
    displayName: 'Reno - 24 Hour Care';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'layout.begin-your-senior-s-journey-with-us',
        'components.when-is-the-right-time',
        'components.subcity-caregivers',
        'components.services-list-home',
        'components.services-home-list-all',
        'components.services-cards',
        'components.services-banner',
        'components.servicelist-banner',
        'components.service-list-head',
        'components.service-city-list',
        'components.right-img-left-content',
        'components.middle-heddec-left-img-right-content',
        'components.middle-hed-dec',
        'components.middle-hed-cards',
        'components.link',
        'components.left-img-right-content',
        'components.home-page-awards',
        'components.home-footer',
        'components.footer-main',
        'components.footer-above-from',
        'components.exceptional-memory-care',
        'components.city-list',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.card-icon-box',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.begin-your-senior-s-journey-with-us-heading',
        'components.banner-hero'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::reno-24-hour-care.reno-24-hour-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::reno-24-hour-care.reno-24-hour-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiRenoAlzheimerSAndDementiaCareRenoAlzheimerSAndDementiaCare
  extends Schema.CollectionType {
  collectionName: 'reno_alzheimer_s_and_dementia_cares';
  info: {
    singularName: 'reno-alzheimer-s-and-dementia-care';
    pluralName: 'reno-alzheimer-s-and-dementia-cares';
    displayName: 'Reno - Alzheimer\u2019s & Dementia Care';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'layout.begin-your-senior-s-journey-with-us',
        'components.when-is-the-right-time',
        'components.subcity-caregivers',
        'components.services-list-home',
        'components.services-home-list-all',
        'components.services-cards',
        'components.services-banner',
        'components.servicelist-banner',
        'components.service-list-head',
        'components.service-city-list',
        'components.right-img-left-content',
        'components.middle-heddec-left-img-right-content',
        'components.middle-hed-dec',
        'components.middle-hed-cards',
        'components.link',
        'components.left-img-right-content',
        'components.home-page-awards',
        'components.home-footer',
        'components.footer-main',
        'components.footer-above-from',
        'components.exceptional-memory-care',
        'components.city-list',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.card-icon-box',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.begin-your-senior-s-journey-with-us-heading',
        'components.banner-hero'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::reno-alzheimer-s-and-dementia-care.reno-alzheimer-s-and-dementia-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::reno-alzheimer-s-and-dementia-care.reno-alzheimer-s-and-dementia-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiRenoCompanionCareRenoCompanionCare
  extends Schema.CollectionType {
  collectionName: 'reno_companion_cares';
  info: {
    singularName: 'reno-companion-care';
    pluralName: 'reno-companion-cares';
    displayName: 'Reno - Companion Care';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'layout.begin-your-senior-s-journey-with-us',
        'components.when-is-the-right-time',
        'components.subcity-caregivers',
        'components.services-list-home',
        'components.services-home-list-all',
        'components.services-cards',
        'components.services-banner',
        'components.servicelist-banner',
        'components.service-list-head',
        'components.service-city-list',
        'components.right-img-left-content',
        'components.middle-heddec-left-img-right-content',
        'components.middle-hed-dec',
        'components.middle-hed-cards',
        'components.link',
        'components.left-img-right-content',
        'components.home-page-awards',
        'components.home-footer',
        'components.footer-main',
        'components.footer-above-from',
        'components.exceptional-memory-care',
        'components.city-list',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.card-icon-box',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.begin-your-senior-s-journey-with-us-heading',
        'components.banner-hero'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::reno-companion-care.reno-companion-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::reno-companion-care.reno-companion-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiRenoPersonalCareRenoPersonalCare
  extends Schema.CollectionType {
  collectionName: 'reno_personal_cares';
  info: {
    singularName: 'reno-personal-care';
    pluralName: 'reno-personal-cares';
    displayName: 'Reno - Personal Care';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'layout.begin-your-senior-s-journey-with-us',
        'components.when-is-the-right-time',
        'components.subcity-caregivers',
        'components.services-list-home',
        'components.services-home-list-all',
        'components.services-cards',
        'components.services-banner',
        'components.servicelist-banner',
        'components.service-list-head',
        'components.service-city-list',
        'components.right-img-left-content',
        'components.middle-heddec-left-img-right-content',
        'components.middle-hed-dec',
        'components.middle-hed-cards',
        'components.link',
        'components.left-img-right-content',
        'components.home-page-awards',
        'components.home-footer',
        'components.footer-main',
        'components.footer-above-from',
        'components.exceptional-memory-care',
        'components.city-list',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.card-icon-box',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.begin-your-senior-s-journey-with-us-heading',
        'components.banner-hero'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::reno-personal-care.reno-personal-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::reno-personal-care.reno-personal-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiRenoRespiteCareRenoRespiteCare
  extends Schema.CollectionType {
  collectionName: 'reno_respite_cares';
  info: {
    singularName: 'reno-respite-care';
    pluralName: 'reno-respite-cares';
    displayName: 'Reno - Respite Care';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'components.when-is-the-right-time',
        'components.subcity-caregivers',
        'components.services-list-home',
        'components.services-home-list-all',
        'components.services-cards',
        'components.services-banner',
        'components.servicelist-banner',
        'components.service-list-head',
        'components.service-city-list',
        'components.right-img-left-content',
        'components.middle-heddec-left-img-right-content',
        'components.middle-hed-dec',
        'components.middle-hed-cards',
        'components.link',
        'components.left-img-right-content',
        'components.home-page-awards',
        'components.home-footer',
        'components.footer-main',
        'components.footer-above-from',
        'components.exceptional-memory-care',
        'components.city-list',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.card-icon-box',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.begin-your-senior-s-journey-with-us-heading',
        'components.banner-hero',
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'layout.begin-your-senior-s-journey-with-us'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::reno-respite-care.reno-respite-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::reno-respite-care.reno-respite-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiRenoVeteranCareRenoVeteranCare
  extends Schema.CollectionType {
  collectionName: 'reno_veteran_cares';
  info: {
    singularName: 'reno-veteran-care';
    pluralName: 'reno-veteran-cares';
    displayName: 'Reno - Veteran Care';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'layout.begin-your-senior-s-journey-with-us',
        'components.when-is-the-right-time',
        'components.subcity-caregivers',
        'components.services-list-home',
        'components.services-home-list-all',
        'components.services-cards',
        'components.services-banner',
        'components.servicelist-banner',
        'components.service-list-head',
        'components.service-city-list',
        'components.right-img-left-content',
        'components.middle-heddec-left-img-right-content',
        'components.middle-hed-dec',
        'components.middle-hed-cards',
        'components.link',
        'components.left-img-right-content',
        'components.home-page-awards',
        'components.home-footer',
        'components.footer-main',
        'components.footer-above-from',
        'components.exceptional-memory-care',
        'components.city-list',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.card-icon-box',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.begin-your-senior-s-journey-with-us-heading',
        'components.banner-hero'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::reno-veteran-care.reno-veteran-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::reno-veteran-care.reno-veteran-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiRespiteCareRespiteCare extends Schema.SingleType {
  collectionName: 'respite_cares';
  info: {
    singularName: 'respite-care';
    pluralName: 'respite-cares';
    displayName: 'Respite Care';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'components.when-is-the-right-time',
        'components.link',
        'components.exceptional-memory-care',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.banner-hero',
        'layout.begin-your-senior-s-journey-with-us',
        'components.footer-main',
        'components.footer-above-from',
        'components.begin-your-senior-s-journey-with-us-heading'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::respite-care.respite-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::respite-care.respite-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiRoundMtCaRoundMtCa extends Schema.CollectionType {
  collectionName: 'round_mt_cas';
  info: {
    singularName: 'round-mt-ca';
    pluralName: 'round-mt-cas';
    displayName: 'Redding - Round Mt, CA';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'layout.begin-your-senior-s-journey-with-us',
        'components.when-is-the-right-time',
        'components.subcity-caregivers',
        'components.services-list-home',
        'components.services-home-list-all',
        'components.services-banner',
        'components.servicelist-banner',
        'components.service-list-head',
        'components.service-city-list',
        'components.right-img-left-content',
        'components.middle-heddec-left-img-right-content',
        'components.middle-hed-dec',
        'components.middle-hed-cards',
        'components.link',
        'components.left-img-right-content',
        'components.home-page-awards',
        'components.home-footer',
        'components.footer-main',
        'components.footer-above-from',
        'components.exceptional-memory-care',
        'components.city-list',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.card-icon-box',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.begin-your-senior-s-journey-with-us-heading',
        'components.banner-hero'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::round-mt-ca.round-mt-ca',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::round-mt-ca.round-mt-ca',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSanJoseCaliforniaSanJoseCalifornia
  extends Schema.CollectionType {
  collectionName: 'san_jose_californias';
  info: {
    singularName: 'san-jose-california';
    pluralName: 'san-jose-californias';
    displayName: 'San Jose';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'components.when-is-the-right-time',
        'components.services-banner',
        'components.right-img-left-content',
        'components.middle-heddec-left-img-right-content',
        'components.middle-hed-dec',
        'components.link',
        'components.left-img-right-content',
        'components.footer-main',
        'components.footer-above-from',
        'components.exceptional-memory-care',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.begin-your-senior-s-journey-with-us-heading',
        'components.banner-hero',
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'layout.begin-your-senior-s-journey-with-us',
        'components.servicelist-banner',
        'components.city-list'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::san-jose-california.san-jose-california',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::san-jose-california.san-jose-california',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSanjose24HourCareSanjose24HourCare
  extends Schema.CollectionType {
  collectionName: 'sanjose_24_hour_cares';
  info: {
    singularName: 'sanjose-24-hour-care';
    pluralName: 'sanjose-24-hour-cares';
    displayName: 'Sanjose - 24 Hour Care';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'layout.begin-your-senior-s-journey-with-us',
        'components.when-is-the-right-time',
        'components.subcity-caregivers',
        'components.services-list-home',
        'components.services-home-list-all',
        'components.services-cards',
        'components.services-banner',
        'components.servicelist-banner',
        'components.service-list-head',
        'components.service-city-list',
        'components.right-img-left-content',
        'components.middle-heddec-left-img-right-content',
        'components.middle-hed-dec',
        'components.middle-hed-cards',
        'components.link',
        'components.left-img-right-content',
        'components.home-page-awards',
        'components.home-footer',
        'components.footer-main',
        'components.footer-above-from',
        'components.exceptional-memory-care',
        'components.city-list',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.card-icon-box',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.begin-your-senior-s-journey-with-us-heading',
        'components.banner-hero'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::sanjose-24-hour-care.sanjose-24-hour-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::sanjose-24-hour-care.sanjose-24-hour-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSanjoseAlzheimerSAndDementiaCareSanjoseAlzheimerSAndDementiaCare
  extends Schema.CollectionType {
  collectionName: 'sanjose_alzheimer_s_and_dementia_cares';
  info: {
    singularName: 'sanjose-alzheimer-s-and-dementia-care';
    pluralName: 'sanjose-alzheimer-s-and-dementia-cares';
    displayName: "Sanjose - Alzheimer's & Dementia Care";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'layout.begin-your-senior-s-journey-with-us',
        'components.when-is-the-right-time',
        'components.subcity-caregivers',
        'components.services-list-home',
        'components.services-home-list-all',
        'components.services-cards',
        'components.services-banner',
        'components.servicelist-banner',
        'components.service-list-head',
        'components.service-city-list',
        'components.right-img-left-content',
        'components.middle-heddec-left-img-right-content',
        'components.middle-hed-dec',
        'components.middle-hed-cards',
        'components.link',
        'components.left-img-right-content',
        'components.home-page-awards',
        'components.home-footer',
        'components.footer-main',
        'components.footer-above-from',
        'components.exceptional-memory-care',
        'components.city-list',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.card-icon-box',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.begin-your-senior-s-journey-with-us-heading',
        'components.banner-hero'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::sanjose-alzheimer-s-and-dementia-care.sanjose-alzheimer-s-and-dementia-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::sanjose-alzheimer-s-and-dementia-care.sanjose-alzheimer-s-and-dementia-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSanjoseCompanionCareSanjoseCompanionCare
  extends Schema.CollectionType {
  collectionName: 'sanjose_companion_cares';
  info: {
    singularName: 'sanjose-companion-care';
    pluralName: 'sanjose-companion-cares';
    displayName: 'Sanjose - Companion Care ';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'layout.begin-your-senior-s-journey-with-us',
        'components.when-is-the-right-time',
        'components.subcity-caregivers',
        'components.services-list-home',
        'components.services-home-list-all',
        'components.services-cards',
        'components.services-banner',
        'components.servicelist-banner',
        'components.service-list-head',
        'components.service-city-list',
        'components.right-img-left-content',
        'components.middle-heddec-left-img-right-content',
        'components.middle-hed-dec',
        'components.middle-hed-cards',
        'components.link',
        'components.left-img-right-content',
        'components.home-page-awards',
        'components.home-footer',
        'components.footer-main',
        'components.footer-above-from',
        'components.exceptional-memory-care',
        'components.city-list',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.card-icon-box',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.begin-your-senior-s-journey-with-us-heading',
        'components.banner-hero'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::sanjose-companion-care.sanjose-companion-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::sanjose-companion-care.sanjose-companion-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSanjosePersonalCareSanjosePersonalCare
  extends Schema.CollectionType {
  collectionName: 'sanjose_personal_cares';
  info: {
    singularName: 'sanjose-personal-care';
    pluralName: 'sanjose-personal-cares';
    displayName: 'Sanjose - Personal Care';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'layout.begin-your-senior-s-journey-with-us',
        'components.when-is-the-right-time',
        'components.subcity-caregivers',
        'components.services-list-home',
        'components.services-home-list-all',
        'components.services-cards',
        'components.services-banner',
        'components.servicelist-banner',
        'components.service-list-head',
        'components.service-city-list',
        'components.right-img-left-content',
        'components.middle-heddec-left-img-right-content',
        'components.middle-hed-dec',
        'components.middle-hed-cards',
        'components.link',
        'components.left-img-right-content',
        'components.home-page-awards',
        'components.home-footer',
        'components.footer-main',
        'components.footer-above-from',
        'components.exceptional-memory-care',
        'components.city-list',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.card-icon-box',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.begin-your-senior-s-journey-with-us-heading',
        'components.banner-hero'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::sanjose-personal-care.sanjose-personal-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::sanjose-personal-care.sanjose-personal-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSanjoseRespiteCareSanjoseRespiteCare
  extends Schema.CollectionType {
  collectionName: 'sanjose_respite_cares';
  info: {
    singularName: 'sanjose-respite-care';
    pluralName: 'sanjose-respite-cares';
    displayName: 'Sanjose - Respite Care';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'layout.begin-your-senior-s-journey-with-us',
        'components.when-is-the-right-time',
        'components.subcity-caregivers',
        'components.services-list-home',
        'components.services-home-list-all',
        'components.services-cards',
        'components.services-banner',
        'components.servicelist-banner',
        'components.service-list-head',
        'components.service-city-list',
        'components.right-img-left-content',
        'components.middle-heddec-left-img-right-content',
        'components.middle-hed-dec',
        'components.middle-hed-cards',
        'components.link',
        'components.left-img-right-content',
        'components.home-page-awards',
        'components.home-footer',
        'components.footer-main',
        'components.footer-above-from',
        'components.exceptional-memory-care',
        'components.city-list',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.card-icon-box',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.begin-your-senior-s-journey-with-us-heading',
        'components.banner-hero'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::sanjose-respite-care.sanjose-respite-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::sanjose-respite-care.sanjose-respite-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSanjoseVeteranCareSanjoseVeteranCare
  extends Schema.CollectionType {
  collectionName: 'sanjose_veteran_cares';
  info: {
    singularName: 'sanjose-veteran-care';
    pluralName: 'sanjose-veteran-cares';
    displayName: 'Sanjose - Veteran Care';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'layout.begin-your-senior-s-journey-with-us',
        'components.when-is-the-right-time',
        'components.subcity-caregivers',
        'components.services-list-home',
        'components.services-home-list-all',
        'components.services-cards',
        'components.services-banner',
        'components.servicelist-banner',
        'components.service-list-head',
        'components.service-city-list',
        'components.right-img-left-content',
        'components.middle-heddec-left-img-right-content',
        'components.middle-hed-dec',
        'components.middle-hed-cards',
        'components.link',
        'components.left-img-right-content',
        'components.home-page-awards',
        'components.home-footer',
        'components.footer-main',
        'components.footer-above-from',
        'components.exceptional-memory-care',
        'components.city-list',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.card-icon-box',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.begin-your-senior-s-journey-with-us-heading',
        'components.banner-hero'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::sanjose-veteran-care.sanjose-veteran-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::sanjose-veteran-care.sanjose-veteran-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSantaClaraCaSantaClaraCa extends Schema.CollectionType {
  collectionName: 'santa_clara_cas';
  info: {
    singularName: 'santa-clara-ca';
    pluralName: 'santa-clara-cas';
    displayName: 'Sanjose - Santa Clara, CA';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'layout.begin-your-senior-s-journey-with-us',
        'components.when-is-the-right-time',
        'components.services-banner',
        'components.servicelist-banner',
        'components.right-img-left-content',
        'components.middle-heddec-left-img-right-content',
        'components.middle-hed-dec',
        'components.link',
        'components.left-img-right-content',
        'components.footer-main',
        'components.footer-above-from',
        'components.exceptional-memory-care',
        'components.city-list',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.begin-your-senior-s-journey-with-us-heading',
        'components.banner-hero'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::santa-clara-ca.santa-clara-ca',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::santa-clara-ca.santa-clara-ca',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSaratogaCaSaratogaCa extends Schema.CollectionType {
  collectionName: 'saratoga_cas';
  info: {
    singularName: 'saratoga-ca';
    pluralName: 'saratoga-cas';
    displayName: 'Sanjose - Saratoga, CA';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'layout.begin-your-senior-s-journey-with-us',
        'components.when-is-the-right-time',
        'components.services-banner',
        'components.servicelist-banner',
        'components.right-img-left-content',
        'components.middle-heddec-left-img-right-content',
        'components.middle-hed-dec',
        'components.link',
        'components.left-img-right-content',
        'components.footer-main',
        'components.footer-above-from',
        'components.exceptional-memory-care',
        'components.city-list',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.begin-your-senior-s-journey-with-us-heading',
        'components.banner-hero'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::saratoga-ca.saratoga-ca',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::saratoga-ca.saratoga-ca',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiServiceService extends Schema.SingleType {
  collectionName: 'services';
  info: {
    singularName: 'service';
    pluralName: 'services';
    displayName: 'Service';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'layout.begin-your-senior-s-journey-with-us',
        'components.when-is-the-right-time',
        'components.subcity-caregivers',
        'components.services-list-home',
        'components.services-home-list-all',
        'components.services-banner',
        'components.servicelist-banner',
        'components.service-list-head',
        'components.service-city-list',
        'components.right-img-left-content',
        'components.middle-heddec-left-img-right-content',
        'components.middle-hed-dec',
        'components.middle-hed-cards',
        'components.link',
        'components.left-img-right-content',
        'components.home-page-awards',
        'components.home-footer',
        'components.footer-main',
        'components.footer-above-from',
        'components.exceptional-memory-care',
        'components.city-list',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.card-icon-box',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.begin-your-senior-s-journey-with-us-heading',
        'components.banner-hero',
        'components.services-cards'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::service.service',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::service.service',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiServiceslistBannerServiceslistBanner
  extends Schema.SingleType {
  collectionName: 'serviceslist_banners';
  info: {
    singularName: 'serviceslist-banner';
    pluralName: 'serviceslist-banners';
    displayName: 'Serviceslist_Banner';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'layout.begin-your-senior-s-journey-with-us',
        'components.when-is-the-right-time',
        'components.subcity-caregivers',
        'components.services-list-home',
        'components.services-home-list-all',
        'components.services-banner',
        'components.servicelist-banner',
        'components.service-list-head',
        'components.service-city-list',
        'components.right-img-left-content',
        'components.middle-heddec-left-img-right-content',
        'components.middle-hed-dec',
        'components.middle-hed-cards',
        'components.link',
        'components.left-img-right-content',
        'components.home-page-awards',
        'components.home-footer',
        'components.footer-main',
        'components.footer-above-from',
        'components.exceptional-memory-care',
        'components.city-list',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.card-icon-box',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.begin-your-senior-s-journey-with-us-heading',
        'components.banner-hero'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::serviceslist-banner.serviceslist-banner',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::serviceslist-banner.serviceslist-banner',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiShastaShasta extends Schema.CollectionType {
  collectionName: 'shastas';
  info: {
    singularName: 'shasta';
    pluralName: 'shastas';
    displayName: 'Redding - Shasta';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'layout.begin-your-senior-s-journey-with-us',
        'components.when-is-the-right-time',
        'components.subcity-caregivers',
        'components.services-list-home',
        'components.services-home-list-all',
        'components.services-banner',
        'components.servicelist-banner',
        'components.service-list-head',
        'components.service-city-list',
        'components.right-img-left-content',
        'components.middle-heddec-left-img-right-content',
        'components.middle-hed-dec',
        'components.middle-hed-cards',
        'components.link',
        'components.left-img-right-content',
        'components.home-page-awards',
        'components.home-footer',
        'components.footer-main',
        'components.footer-above-from',
        'components.exceptional-memory-care',
        'components.city-list',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.card-icon-box',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.begin-your-senior-s-journey-with-us-heading',
        'components.banner-hero'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::shasta.shasta',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::shasta.shasta',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiShingleTownCaShingleTownCa extends Schema.CollectionType {
  collectionName: 'shingle_town_cas';
  info: {
    singularName: 'shingle-town-ca';
    pluralName: 'shingle-town-cas';
    displayName: 'Redding - Shingle Town, CA';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'layout.begin-your-senior-s-journey-with-us',
        'components.when-is-the-right-time',
        'components.subcity-caregivers',
        'components.services-list-home',
        'components.services-home-list-all',
        'components.services-banner',
        'components.servicelist-banner',
        'components.service-list-head',
        'components.service-city-list',
        'components.right-img-left-content',
        'components.middle-heddec-left-img-right-content',
        'components.middle-hed-dec',
        'components.middle-hed-cards',
        'components.link',
        'components.left-img-right-content',
        'components.home-page-awards',
        'components.home-footer',
        'components.footer-main',
        'components.footer-above-from',
        'components.exceptional-memory-care',
        'components.city-list',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.card-icon-box',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.begin-your-senior-s-journey-with-us-heading',
        'components.banner-hero'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::shingle-town-ca.shingle-town-ca',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::shingle-town-ca.shingle-town-ca',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSubcityCaregiversSectionSubcityCaregiversSection
  extends Schema.SingleType {
  collectionName: 'subcity_caregivers_sections';
  info: {
    singularName: 'subcity-caregivers-section';
    pluralName: 'subcity-caregivers-sections';
    displayName: 'CityNavbarfooter';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    footerabove: Attribute.DynamicZone<
      [
        'components.subcity-caregivers',
        'components.begin-your-senior-s-journey-with-us-heading',
        'components.footer-main'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::subcity-caregivers-section.subcity-caregivers-section',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::subcity-caregivers-section.subcity-caregivers-section',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSunnyvaleCaliforniaSunnyvaleCalifornia
  extends Schema.CollectionType {
  collectionName: 'sunnyvale_californias';
  info: {
    singularName: 'sunnyvale-california';
    pluralName: 'sunnyvale-californias';
    displayName: 'Sanjose - Sunnyvale, California';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'layout.begin-your-senior-s-journey-with-us',
        'components.when-is-the-right-time',
        'components.services-banner',
        'components.servicelist-banner',
        'components.right-img-left-content',
        'components.middle-heddec-left-img-right-content',
        'components.middle-hed-dec',
        'components.link',
        'components.left-img-right-content',
        'components.footer-main',
        'components.footer-above-from',
        'components.exceptional-memory-care',
        'components.city-list',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.begin-your-senior-s-journey-with-us-heading',
        'components.banner-hero'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::sunnyvale-california.sunnyvale-california',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::sunnyvale-california.sunnyvale-california',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTwentyFourHourHomeCareTwentyFourHourHomeCare
  extends Schema.SingleType {
  collectionName: 'twenty_four_hour_home_cares';
  info: {
    singularName: 'twenty-four-hour-home-care';
    pluralName: 'twenty-four-hour-home-cares';
    displayName: 'twenty four hour Home Care';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'components.when-is-the-right-time',
        'components.link',
        'components.exceptional-memory-care',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.banner-hero',
        'layout.begin-your-senior-s-journey-with-us',
        'components.footer-main',
        'components.footer-above-from',
        'components.begin-your-senior-s-journey-with-us-heading'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::twenty-four-hour-home-care.twenty-four-hour-home-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::twenty-four-hour-home-care.twenty-four-hour-home-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiVeteranHomeCareVeteranHomeCare extends Schema.SingleType {
  collectionName: 'veteran_home_cares';
  info: {
    singularName: 'veteran-home-care';
    pluralName: 'veteran-home-cares';
    displayName: 'Veteran Home Care ';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'components.when-is-the-right-time',
        'components.link',
        'components.exceptional-memory-care',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.banner-hero',
        'layout.begin-your-senior-s-journey-with-us',
        'components.footer-main',
        'components.footer-above-from',
        'components.begin-your-senior-s-journey-with-us-heading'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::veteran-home-care.veteran-home-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::veteran-home-care.veteran-home-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiYubaYuba extends Schema.CollectionType {
  collectionName: 'yubas';
  info: {
    singularName: 'yuba';
    pluralName: 'yubas';
    displayName: 'Yuba';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'layout.begin-your-senior-s-journey-with-us',
        'components.when-is-the-right-time',
        'components.subcity-caregivers',
        'components.services-list-home',
        'components.services-home-list-all',
        'components.services-banner',
        'components.servicelist-banner',
        'components.service-list-head',
        'components.service-city-list',
        'components.right-img-left-content',
        'components.middle-heddec-left-img-right-content',
        'components.middle-hed-dec',
        'components.middle-hed-cards',
        'components.link',
        'components.left-img-right-content',
        'components.home-page-awards',
        'components.home-footer',
        'components.footer-main',
        'components.footer-above-from',
        'components.exceptional-memory-care',
        'components.city-list',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.card-icon-box',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.begin-your-senior-s-journey-with-us-heading',
        'components.banner-hero'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::yuba.yuba', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::yuba.yuba', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiYuba24HourCareYuba24HourCare extends Schema.CollectionType {
  collectionName: 'yuba_24_hour_cares';
  info: {
    singularName: 'yuba-24-hour-care';
    pluralName: 'yuba-24-hour-cares';
    displayName: 'Yuba - 24 Hour Care';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'layout.begin-your-senior-s-journey-with-us',
        'components.when-is-the-right-time',
        'components.subcity-caregivers',
        'components.services-list-home',
        'components.services-home-list-all',
        'components.services-cards',
        'components.services-banner',
        'components.servicelist-banner',
        'components.service-list-head',
        'components.service-city-list',
        'components.right-img-left-content',
        'components.middle-heddec-left-img-right-content',
        'components.middle-hed-dec',
        'components.middle-hed-cards',
        'components.link',
        'components.left-img-right-content',
        'components.home-page-awards',
        'components.home-footer',
        'components.footer-main',
        'components.footer-above-from',
        'components.exceptional-memory-care',
        'components.city-list',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.card-icon-box',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.begin-your-senior-s-journey-with-us-heading',
        'components.banner-hero'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::yuba-24-hour-care.yuba-24-hour-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::yuba-24-hour-care.yuba-24-hour-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiYubaAlzheimerSAndDementiaCareYubaAlzheimerSAndDementiaCare
  extends Schema.CollectionType {
  collectionName: 'yuba_alzheimer_s_and_dementia_cares';
  info: {
    singularName: 'yuba-alzheimer-s-and-dementia-care';
    pluralName: 'yuba-alzheimer-s-and-dementia-cares';
    displayName: 'Yuba - Alzheimer\u2019s & Dementia Care';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'layout.begin-your-senior-s-journey-with-us',
        'components.when-is-the-right-time',
        'components.subcity-caregivers',
        'components.services-list-home',
        'components.services-home-list-all',
        'components.services-cards',
        'components.services-banner',
        'components.servicelist-banner',
        'components.service-list-head',
        'components.service-city-list',
        'components.right-img-left-content',
        'components.middle-heddec-left-img-right-content',
        'components.middle-hed-dec',
        'components.middle-hed-cards',
        'components.link',
        'components.left-img-right-content',
        'components.home-page-awards',
        'components.home-footer',
        'components.footer-main',
        'components.footer-above-from',
        'components.exceptional-memory-care',
        'components.city-list',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.card-icon-box',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.begin-your-senior-s-journey-with-us-heading',
        'components.banner-hero'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::yuba-alzheimer-s-and-dementia-care.yuba-alzheimer-s-and-dementia-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::yuba-alzheimer-s-and-dementia-care.yuba-alzheimer-s-and-dementia-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiYubaCompanionCareYubaCompanionCare
  extends Schema.CollectionType {
  collectionName: 'yuba_companion_cares';
  info: {
    singularName: 'yuba-companion-care';
    pluralName: 'yuba-companion-cares';
    displayName: 'Yuba - Companion Care';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'layout.begin-your-senior-s-journey-with-us',
        'components.when-is-the-right-time',
        'components.subcity-caregivers',
        'components.services-list-home',
        'components.services-home-list-all',
        'components.services-cards',
        'components.services-banner',
        'components.servicelist-banner',
        'components.service-list-head',
        'components.service-city-list',
        'components.right-img-left-content',
        'components.middle-heddec-left-img-right-content',
        'components.middle-hed-dec',
        'components.middle-hed-cards',
        'components.link',
        'components.left-img-right-content',
        'components.home-page-awards',
        'components.home-footer',
        'components.footer-main',
        'components.footer-above-from',
        'components.exceptional-memory-care',
        'components.city-list',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.card-icon-box',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.begin-your-senior-s-journey-with-us-heading',
        'components.banner-hero'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::yuba-companion-care.yuba-companion-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::yuba-companion-care.yuba-companion-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiYubaPersonalCareYubaPersonalCare
  extends Schema.CollectionType {
  collectionName: 'yuba_personal_cares';
  info: {
    singularName: 'yuba-personal-care';
    pluralName: 'yuba-personal-cares';
    displayName: 'Yuba - Personal Care';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'layout.begin-your-senior-s-journey-with-us',
        'components.when-is-the-right-time',
        'components.subcity-caregivers',
        'components.services-list-home',
        'components.services-home-list-all',
        'components.services-cards',
        'components.services-banner',
        'components.servicelist-banner',
        'components.service-list-head',
        'components.service-city-list',
        'components.right-img-left-content',
        'components.middle-heddec-left-img-right-content',
        'components.middle-hed-dec',
        'components.middle-hed-cards',
        'components.link',
        'components.left-img-right-content',
        'components.home-page-awards',
        'components.home-footer',
        'components.footer-main',
        'components.footer-above-from',
        'components.exceptional-memory-care',
        'components.city-list',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.card-icon-box',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.begin-your-senior-s-journey-with-us-heading',
        'components.banner-hero'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::yuba-personal-care.yuba-personal-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::yuba-personal-care.yuba-personal-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiYubaRespiteCareYubaRespiteCare
  extends Schema.CollectionType {
  collectionName: 'yuba_respite_cares';
  info: {
    singularName: 'yuba-respite-care';
    pluralName: 'yuba-respite-cares';
    displayName: 'Yuba - Respite Care';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'layout.begin-your-senior-s-journey-with-us',
        'components.when-is-the-right-time',
        'components.subcity-caregivers',
        'components.services-list-home',
        'components.services-home-list-all',
        'components.services-cards',
        'components.services-banner',
        'components.servicelist-banner',
        'components.service-list-head',
        'components.service-city-list',
        'components.right-img-left-content',
        'components.middle-heddec-left-img-right-content',
        'components.middle-hed-dec',
        'components.middle-hed-cards',
        'components.link',
        'components.left-img-right-content',
        'components.home-page-awards',
        'components.home-footer',
        'components.footer-main',
        'components.footer-above-from',
        'components.exceptional-memory-care',
        'components.city-list',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.card-icon-box',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.begin-your-senior-s-journey-with-us-heading',
        'components.banner-hero'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::yuba-respite-care.yuba-respite-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::yuba-respite-care.yuba-respite-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiYubaVeteranCareYubaVeteranCare
  extends Schema.CollectionType {
  collectionName: 'yuba_veteran_cares';
  info: {
    singularName: 'yuba-veteran-care';
    pluralName: 'yuba-veteran-cares';
    displayName: 'Yuba - Veteran Care';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    maincontent: Attribute.DynamicZone<
      [
        'layout.senior-s-journey-with-us',
        'layout.journey',
        'layout.begin-your-senior-s-journey-with-us',
        'components.when-is-the-right-time',
        'components.subcity-caregivers',
        'components.services-list-home',
        'components.services-home-list-all',
        'components.services-cards',
        'components.services-banner',
        'components.servicelist-banner',
        'components.service-list-head',
        'components.service-city-list',
        'components.right-img-left-content',
        'components.middle-heddec-left-img-right-content',
        'components.middle-hed-dec',
        'components.middle-hed-cards',
        'components.link',
        'components.left-img-right-content',
        'components.home-page-awards',
        'components.home-footer',
        'components.footer-main',
        'components.footer-above-from',
        'components.exceptional-memory-care',
        'components.city-list',
        'components.choose-interim-healthcare',
        'components.cargiver-cta',
        'components.card-icon-box',
        'components.benefits',
        'components.benefits-our-memory-care',
        'components.begin-your-senior-s-journey-with-us-heading',
        'components.banner-hero'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::yuba-veteran-care.yuba-veteran-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::yuba-veteran-care.yuba-veteran-care',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'api::alzheimer-s-and-dementia.alzheimer-s-and-dementia': ApiAlzheimerSAndDementiaAlzheimerSAndDementia;
      'api::bella-vista.bella-vista': ApiBellaVistaBellaVista;
      'api::caregiver-cta.caregiver-cta': ApiCaregiverCtaCaregiverCta;
      'api::carson.carson': ApiCarsonCarson;
      'api::carson-24-hour-home-care.carson-24-hour-home-care': ApiCarson24HourHomeCareCarson24HourHomeCare;
      'api::carson-alzheimer-s-and-dementia-care.carson-alzheimer-s-and-dementia-care': ApiCarsonAlzheimerSAndDementiaCareCarsonAlzheimerSAndDementiaCare;
      'api::carson-companion-care.carson-companion-care': ApiCarsonCompanionCareCarsonCompanionCare;
      'api::carson-hospice-care.carson-hospice-care': ApiCarsonHospiceCareCarsonHospiceCare;
      'api::carson-personal-care.carson-personal-care': ApiCarsonPersonalCareCarsonPersonalCare;
      'api::carson-veteran-care.carson-veteran-care': ApiCarsonVeteranCareCarsonVeteranCare;
      'api::castle-hill.castle-hill': ApiCastleHillCastleHill;
      'api::chico.chico': ApiChicoChico;
      'api::chico-24-hour-care.chico-24-hour-care': ApiChico24HourCareChico24HourCare;
      'api::chico-alzheimer-s-and-dementia-care.chico-alzheimer-s-and-dementia-care': ApiChicoAlzheimerSAndDementiaCareChicoAlzheimerSAndDementiaCare;
      'api::chico-companion-care.chico-companion-care': ApiChicoCompanionCareChicoCompanionCare;
      'api::chico-personal-care.chico-personal-care': ApiChicoPersonalCareChicoPersonalCare;
      'api::chico-respite-care.chico-respite-care': ApiChicoRespiteCareChicoRespiteCare;
      'api::chico-veteran-care.chico-veteran-care': ApiChicoVeteranCareChicoVeteranCare;
      'api::companion-care-service.companion-care-service': ApiCompanionCareServiceCompanionCareService;
      'api::contact-from.contact-from': ApiContactFromContactFrom;
      'api::cottonwood.cottonwood': ApiCottonwoodCottonwood;
      'api::cupertino-ca.cupertino-ca': ApiCupertinoCaCupertinoCa;
      'api::diabetics-care.diabetics-care': ApiDiabeticsCareDiabeticsCare;
      'api::evergreen-ca.evergreen-ca': ApiEvergreenCaEvergreenCa;
      'api::grant-pass.grant-pass': ApiGrantPassGrantPass;
      'api::grant-pass-24-hour-home-care.grant-pass-24-hour-home-care': ApiGrantPass24HourHomeCareGrantPass24HourHomeCare;
      'api::grant-pass-alzheimer-s-and-dementia-care.grant-pass-alzheimer-s-and-dementia-care': ApiGrantPassAlzheimerSAndDementiaCareGrantPassAlzheimerSAndDementiaCare;
      'api::grant-pass-companion-care.grant-pass-companion-care': ApiGrantPassCompanionCareGrantPassCompanionCare;
      'api::grant-pass-personal-care.grant-pass-personal-care': ApiGrantPassPersonalCareGrantPassPersonalCare;
      'api::grant-pass-respite-care.grant-pass-respite-care': ApiGrantPassRespiteCareGrantPassRespiteCare;
      'api::grant-pass-veteran-care.grant-pass-veteran-care': ApiGrantPassVeteranCareGrantPassVeteranCare;
      'api::grass-valley.grass-valley': ApiGrassValleyGrassValley;
      'api::grass-valley-24-hour-care.grass-valley-24-hour-care': ApiGrassValley24HourCareGrassValley24HourCare;
      'api::grass-valley-alzheimer-s-and-dementia-care.grass-valley-alzheimer-s-and-dementia-care': ApiGrassValleyAlzheimerSAndDementiaCareGrassValleyAlzheimerSAndDementiaCare;
      'api::grass-valley-companion-care.grass-valley-companion-care': ApiGrassValleyCompanionCareGrassValleyCompanionCare;
      'api::grass-valley-personal-care.grass-valley-personal-care': ApiGrassValleyPersonalCareGrassValleyPersonalCare;
      'api::grass-valley-respite-care.grass-valley-respite-care': ApiGrassValleyRespiteCareGrassValleyRespiteCare;
      'api::grass-valley-veteran-care.grass-valley-veteran-care': ApiGrassValleyVeteranCareGrassValleyVeteranCare;
      'api::hat-creek.hat-creek': ApiHatCreekHatCreek;
      'api::home.home': ApiHomeHome;
      'api::hospice-care.hospice-care': ApiHospiceCareHospiceCare;
      'api::johnson-park.johnson-park': ApiJohnsonParkJohnsonPark;
      'api::los-altos-california.los-altos-california': ApiLosAltosCaliforniaLosAltosCalifornia;
      'api::los-gatos-california.los-gatos-california': ApiLosGatosCaliforniaLosGatosCalifornia;
      'api::medford.medford': ApiMedfordMedford;
      'api::medford-24-hour-care.medford-24-hour-care': ApiMedford24HourCareMedford24HourCare;
      'api::medford-alzheimer-s-and-dementia-care.medford-alzheimer-s-and-dementia-care': ApiMedfordAlzheimerSAndDementiaCareMedfordAlzheimerSAndDementiaCare;
      'api::medford-companion-care.medford-companion-care': ApiMedfordCompanionCareMedfordCompanionCare;
      'api::medford-personal-care.medford-personal-care': ApiMedfordPersonalCareMedfordPersonalCare;
      'api::medford-respite-care.medford-respite-care': ApiMedfordRespiteCareMedfordRespiteCare;
      'api::medford-veteran-care.medford-veteran-care': ApiMedfordVeteranCareMedfordVeteranCare;
      'api::milpitas-california.milpitas-california': ApiMilpitasCaliforniaMilpitasCalifornia;
      'api::montgomery-creek.montgomery-creek': ApiMontgomeryCreekMontgomeryCreek;
      'api::mountain-view-california.mountain-view-california': ApiMountainViewCaliforniaMountainViewCalifornia;
      'api::palliative-care.palliative-care': ApiPalliativeCarePalliativeCare;
      'api::palo-cedro.palo-cedro': ApiPaloCedroPaloCedro;
      'api::personal-care-service.personal-care-service': ApiPersonalCareServicePersonalCareService;
      'api::rancho-tehama.rancho-tehama': ApiRanchoTehamaRanchoTehama;
      'api::redding.redding': ApiReddingRedding;
      'api::reno.reno': ApiRenoReno;
      'api::reno-24-hour-care.reno-24-hour-care': ApiReno24HourCareReno24HourCare;
      'api::reno-alzheimer-s-and-dementia-care.reno-alzheimer-s-and-dementia-care': ApiRenoAlzheimerSAndDementiaCareRenoAlzheimerSAndDementiaCare;
      'api::reno-companion-care.reno-companion-care': ApiRenoCompanionCareRenoCompanionCare;
      'api::reno-personal-care.reno-personal-care': ApiRenoPersonalCareRenoPersonalCare;
      'api::reno-respite-care.reno-respite-care': ApiRenoRespiteCareRenoRespiteCare;
      'api::reno-veteran-care.reno-veteran-care': ApiRenoVeteranCareRenoVeteranCare;
      'api::respite-care.respite-care': ApiRespiteCareRespiteCare;
      'api::round-mt-ca.round-mt-ca': ApiRoundMtCaRoundMtCa;
      'api::san-jose-california.san-jose-california': ApiSanJoseCaliforniaSanJoseCalifornia;
      'api::sanjose-24-hour-care.sanjose-24-hour-care': ApiSanjose24HourCareSanjose24HourCare;
      'api::sanjose-alzheimer-s-and-dementia-care.sanjose-alzheimer-s-and-dementia-care': ApiSanjoseAlzheimerSAndDementiaCareSanjoseAlzheimerSAndDementiaCare;
      'api::sanjose-companion-care.sanjose-companion-care': ApiSanjoseCompanionCareSanjoseCompanionCare;
      'api::sanjose-personal-care.sanjose-personal-care': ApiSanjosePersonalCareSanjosePersonalCare;
      'api::sanjose-respite-care.sanjose-respite-care': ApiSanjoseRespiteCareSanjoseRespiteCare;
      'api::sanjose-veteran-care.sanjose-veteran-care': ApiSanjoseVeteranCareSanjoseVeteranCare;
      'api::santa-clara-ca.santa-clara-ca': ApiSantaClaraCaSantaClaraCa;
      'api::saratoga-ca.saratoga-ca': ApiSaratogaCaSaratogaCa;
      'api::service.service': ApiServiceService;
      'api::serviceslist-banner.serviceslist-banner': ApiServiceslistBannerServiceslistBanner;
      'api::shasta.shasta': ApiShastaShasta;
      'api::shingle-town-ca.shingle-town-ca': ApiShingleTownCaShingleTownCa;
      'api::subcity-caregivers-section.subcity-caregivers-section': ApiSubcityCaregiversSectionSubcityCaregiversSection;
      'api::sunnyvale-california.sunnyvale-california': ApiSunnyvaleCaliforniaSunnyvaleCalifornia;
      'api::twenty-four-hour-home-care.twenty-four-hour-home-care': ApiTwentyFourHourHomeCareTwentyFourHourHomeCare;
      'api::veteran-home-care.veteran-home-care': ApiVeteranHomeCareVeteranHomeCare;
      'api::yuba.yuba': ApiYubaYuba;
      'api::yuba-24-hour-care.yuba-24-hour-care': ApiYuba24HourCareYuba24HourCare;
      'api::yuba-alzheimer-s-and-dementia-care.yuba-alzheimer-s-and-dementia-care': ApiYubaAlzheimerSAndDementiaCareYubaAlzheimerSAndDementiaCare;
      'api::yuba-companion-care.yuba-companion-care': ApiYubaCompanionCareYubaCompanionCare;
      'api::yuba-personal-care.yuba-personal-care': ApiYubaPersonalCareYubaPersonalCare;
      'api::yuba-respite-care.yuba-respite-care': ApiYubaRespiteCareYubaRespiteCare;
      'api::yuba-veteran-care.yuba-veteran-care': ApiYubaVeteranCareYubaVeteranCare;
    }
  }
}
