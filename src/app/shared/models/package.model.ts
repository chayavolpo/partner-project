export enum PackageType {
  Basic = 'בסיסית',
  Discounted = 'מוזלת',
  Extended = 'מורחבת'
}

export interface Package {
  packageType: PackageType,
  pricePerMonth: number,
  noSMSLimit: boolean,
  noCallsLimit: boolean,
  noMessagesLimit: boolean
  GBamount: number,
  // numOfMinutesOverseas?: number;
  advantage: string;
  orderOnlineGift: string,
  isOnlineExclusive: boolean
}