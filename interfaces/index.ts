export type TagsType = Array<string>

export interface ImageInterface {
    [P: string]: {
        width: number,
        height: number
    };
}

export interface ProfileInterface {
  "github"?: string,
  "adText"?: string,
  "preferredCharity"?: any,
  "showStatsPublicly"?: boolean,
  "publicBookmarks"?: boolean,
  "id"?: string,
  "bio"?: string,
  "youtube"?: string,
  "avatar"?: string,
  "twitter"?: string,
  "adLink"?: string,
  "adIcon"?: string,
  "displayName"?: string,
  "handle": string
}

export interface ReactionTypeInterface {
  "light": number,
  "boat": number,
  "heart": number,
  "money": number
}

export interface ReactionsInterface {
  "sections": object,
  "total": number,
  "storyReactions": ReactionTypeInterface
}

export interface RelatedStoryInterface {
  "id"?: string,
  "owner"?: string,
  "publishedAt"?: number,
  "slug"?: string,
  "title"?: string,
  "firstSeenAt"?: string | null,
  "excerpt"?: string,
  "estimatedTime"?: number,
  "createdAt"?: number,
  "profile"?: ProfileInterface,
  "mainImage"?: string,
  "published"?: boolean,
  "tags": TagsType,
  "reactionsCount": number
}

export interface NotFoundCommonInterface {
  error: string
}

export interface PostInterface {
  "id": string,
  "tags": TagsType,
  "markup": string,
  "publishedAt": number,
  "mainImageAttributionLink": null | string,
  "fromSlack"?: boolean,
  "firstSeenAt": boolean | string,
  "title": string,
  "mainImage": string,
  "slug": string,
  "createdAt": number,
  "wordCount": number,
  "editor": {
    "displayName": string,
    "id": string,
    "handle": string
  },
  "excerpt": string,
  "profile": ProfileInterface,
  "images": ImageInterface,
  "estimatedTime": number,
  "published": boolean,
  "reactions": ReactionsInterface,
  "relatedStories": Array<RelatedStoryInterface>
}