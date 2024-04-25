/**
 * @fileoverview JSON opcodes for Discord's API.
 * @see {@link https://discord.com/developers/docs/topics/opcodes-and-status-codes#json}
 */

/**
 * @see {@link https://discord.com/developers/docs/topics/opcodes-and-status-codes#json-json-error-codes}
 */
export enum JSONErrorCodes {
	GeneralError = 0,
	UnknownAccount = 10_001,
	UnknownApplication = 10_002,
	UnknownChannel = 10_003,
	UnknownGuild = 10_004,
	UnknownIntegration = 10_005,
	UnknownInvite = 10_006,
	UnknownMember = 10_007,
	UnknownMessage = 10_008,
	UnknownPermissionOverwrite = 10_009,
	UnknownProvider = 10_010,
	UnknownRole = 10_011,
	UnknownToken = 10_012,
	UnknownUser = 10_013,
	UnknownEmoji = 10_014,
	UnknownWebhook = 10_015,
	UnknownWebhookService = 10_016,
	UnknownSession = 10_020,
	UnknownBan = 10_026,
	UnknownSKU = 10_027,
	UnknownStoreListing = 10_028,
	UnknownEntitlement = 10_029,
	UnknownBuild = 10_030,
	UnknownLobby = 10_031,
	UnknownBranch = 10_032,
	UnknownStoreDirectoryLayout = 10_033,
	UnknownRedistributable = 10_036,
	UnknownGiftCode = 10_038,
	UnknownStream = 10_049,
	UnknownPremiumServerSubscribeCooldown = 10_050,
	UnknownGuildTemplate = 10_057,
	UnknownDiscoverableServerCategory = 10_059,
	UnknownSticker = 10_060,
	UnknownInteraction = 10_062,
	UnknownApplicationCommand = 10_063,
	UnknownVoiceState = 10_065,
	UnknownApplicationCommandPermissions = 10_066,
	UnknownStageInstance = 10_067,
	UnknownGuildMemberVerificationForm = 10_068,
	UnknownGuildWelcomeScreen = 10_069,
	UnknownGuildScheduledEvent = 10_070,
	UnknownGuildScheduledEventUser = 10_071,
	UnknownTag = 10_087,
	BotsCannotUseThisEndpoint = 20_001,
	OnlyBotsCanUseThisEndpoint = 20_002,
	ExplicitContentCannotBeSentToTheDesiredRecipients = 20_009,
	NotAuthorizedToPerformThisActionOnThisApplication = 20_012,
	ThisActionCannotBePerformedDueToSlowmodeRateLimit = 20_016,
	OnlyTheOwnerOfThisAccountCanPerformThisAction = 20_018,
	ThisMessageCannotBeEditedDueToAnnouncementRateLimits = 20_022,
	UnderMinimumAge = 20_024,
	TheChannelYouAreWritingHasHitTheWriteRateLimit = 20_028,
	TheWriteActionYouArePerformingOnTheServerHasHitTheWriteRateLimit = 20_029,
	YourStageTopicServerNameServerDescriptionOrChannelNamesContainWordsThatAreNotAllowed = 20_031,
	GuildPremiumSubscriptionLevelTooLow = 20_035,
	MaximumNumberOfGuildsReached = 30_001,
	MaximumNumberOfFriendsReached = 30_002,
	MaximumNumberOfPinsReachedForTheChannel = 30_003,
	MaximumNumberOfRecipientsReached = 30_004,
	MaximumNumberOfGuildRolesReached = 30_005,
	MaximumNumberOfWebhooksReached = 30_007,
	MaximumNumberOfEmojisReached = 30_008,
	MaximumNumberOfReactionsReached = 30_010,
	MaximumNumberOfGroupDMsReached = 30_011,
	MaximumNumberOfGuildChannelsReached = 30_013,
	MaximumNumberOfAttachmentsInAMessageReached = 30_015,
	MaximumNumberOfInvitesReached = 30_016,
	MaximumNumberOfAnimatedEmojisReached = 30_018,
	MaximumNumberOfServerMembersReached = 30_019,
	MaximumNumberOfServerCategoriesHasBeenReached = 30_030,
	GuildAlreadyHasATemplate = 30_031,
	MaximumNumberOfApplicationCommandsReached = 30_032,
	MaximumNumberOfThreadParticipantsHasBeenReached = 30_033,
	MaximumNumberOfDailyApplicationCommandCreatesHasBeenReached = 30_034,
	MaximumNumberOfBansForNonGuildMembersHaveBeenExceeded = 30_035,
	MaximumNumberOfBansFetchesHasBeenReached = 30_037,
	MaximumNumberOfUncompletedGuildScheduledEventsReached = 30_038,
	MaximumNumberOfStickersReached = 30_039,
	MaximumNumberOfPruneRequestsHasBeenReachedTryAgainLater = 30_040,
	MaximumNumberOfGuildWidgetSettingsUpdatesHasBeenReachedTryAgainLater = 30_042,
	MaximumNumberOfEditsToMessagesOlderThan1HourReachedTryAgainLater = 30_046,
	MaximumNumberOfPinnedThreadsInAForumChannelHasBeenReached = 30_047,
	MaximumNumberOfTagsInAForumChannelHasBeenReached = 30_048,
	BitrateIsTooHighForChannelOfThisType = 30_052,
	MaximumNumberOfPremiumEmojisReached = 30_056,
	MaximumNumberOfWebhooksPerGuildReached = 30_058,
	MaximumNumberOfChannelPermissionOverwritesReached = 30_060,
	TheChannelsForThisGuildAreTooLarge = 30_061,
	UnauthorizedProvideAValidTokenAndTryAgain = 40_001,
	YouNeedToVerifyYourAccountInOrderToPerformThisAction = 40_002,
	YouAreOpeningDirectMessagesTooFast = 40_003,
	SendMessagesHasBeenTemporarilyDisabled = 40_004,
	RequestEntityTooLargeTrySendingSomethingSmallerInSize = 40_005,
	ThisFeatureHasBeenTemporarilyDisabledServerSide = 40_006,
	TheUserIsBannedFromThisGuild = 40_007,
	ConnectionHasBeenRevoked = 40_012,
	TargetUserIsNotConnectedToVoice = 40_032,
	ThisMessageHasBeenAlreadyCrossposted = 40_033,
	AnApplicationCommandWithThatNameAlreadyExists = 40_041,
	ApplicationInteractionFailedToSend = 40_043,
	CannotSendAMessageInAForumChannel = 40_058,
	InteractionHasBeenAlreadyAcknowledged = 40_060,
	TagNamesMustBeUnique = 40_061,
	ServiceResourceIsBeingRateLimited = 40_062,
	ThereAreNoTagsAvailableThatCanBeSetByNonModerators = 40_066,
	ATagIsRequiredToCreateAForumPostInThisChannel = 40_067,
	AnEntitlementHasBeenAlreadyGrantedForThisResource = 40_074,
	MissingAccess = 50_001,
	InvalidAccountType = 50_002,
	CannotExecuteActionOnADMChannel = 50_003,
	GuildWidgetDisabled = 50_004,
	CannotEditAMessageAuthoredByAnotherUser = 50_005,
	CannotSendAnEmptyMessage = 50_006,
	CannotSendMessagesToThisUser = 50_007,
	CannotSendMessagesInANonTextChannel = 50_008,
	ChannelVerificationLevelIsTooHighForYouToGainAccess = 50_009,
	OAuth2ApplicationDoesNotHaveABot = 50_010,
	OAuth2ApplicationLimitReached = 50_011,
	InvalidOAuth2State = 50_012,
	YouLackPermissionsToPerformThatAction = 50_013,
	InvalidAuthenticationTokenProvided = 50_014,
	NoteWasTooLong = 50_015,
	ProvidedTooFewOrTooManyMessagesToDeleteMustProvideAtLeast2AndFewerThan100MessagesToDelete = 50_016,
	InvalidMFALevel = 50_017,
	AMessageCanOnlyBePinnedToTheChannelItWasSentIn = 50_019,
	InviteCodeWasEitherInvalidOrTaken = 50_020,
	CannotExecuteActionOnASystemMessage = 50_021,
	CannotExecuteActionOnThisChannelType = 50_024,
	InvalidOAuth2AccessTokenProvided = 50_025,
	MissingRequiredOAuth2Scope = 50_026,
	InvalidWebhookTokenProvided = 50_027,
	InvalidRole = 50_028,
	InvalidRecipient = 50_033,
	InvalidMessageProvidedWasTooOldToBulkDelete = 50_034,
	InvalidFormBodyReturnedForBothApplicationJSONAndMultipartFormDataBodiesOrInvalidContentTypeProvided = 50_035,
	AnInviteWasAcceptedToAGuildTheApplicationsBotIsNotIn = 50_036,
	InvalidActivityAction = 50_039,
	InvalidAPIVersionProvided = 50_041,
	FileUploadedExceedsTheMaximumSize = 50_045,
	InvalidFileUploaded = 50_046,
	CannotSelfRedeemThisGift = 50_054,
	InvalidGuild = 50_055,
	InvalidSKU = 50_057,
	InvalidRequestOrigin = 50_067,
	InvalidMessageType = 50_068,
	PaymentSourceRequiredToRedeemGift = 50_070,
	CannotModifyASystemWebhook = 50_073,
	CannotDeleteAChannelRequiredForCommunityGuilds = 50_074,
	CannotEditStickersWithinAMessage = 50_080,
	InvalidStickerSent = 50_081,
	TriedToPerformAnOperationOnAnArchivedThreadSuchAsEditingAMessageOrAddingAUserToTheThread = 50_083,
	InvalidThreadNotificationSettings = 50_084,
	BeforeValueIsEarlierThanTheThreadCreationDate = 50_085,
	CommunityServerChannelsMustBeTextChannels = 50_086,
	TheEntityTypeOfTheEventIsDifferentFromTheEntityYouAreTryingToStartTheEventFor = 50_091,
	ThisServerIsNotAvailableInYourLocation = 50_095,
	ThisServerNeedsMonetizationEnabledInOrderToPerformThisAction = 50_097,
	ThisServerNeedsMoreBoostsToPerformThisAction = 50_101,
	TheRequestBodyContainsInvalidJSON = 50_109,
	OwnerCannotBePendingMember = 50_131,
	OwnershipCannotBeTransferredToABotUser = 50_132,
	FailedToResizeAssetBelowTheMaximumSize = 50_138,
	CannotMixSubscriptionAndNonSubscriptionRolesForAnEmoji = 50_144,
	CannotConvertBetweenPremiumEmojiAndNormalEmoji = 50_145,
	UploadedFileNotFound = 50_146,
	VoiceMessagesDoNotSupportAdditionalContent = 50_159,
	VoiceMessagesMustHaveASingleAudioAttachment = 50_160,
	VoiceMessagesMustHaveSupportingMetadata = 50_161,
	VoiceMessagesCannotBeEdited = 50_162,
	CannotDeleteGuildSubscriptionIntegration = 50_163,
	YouCannotSendVoiceMessagesInThisChannel = 50_173,
	TheUserAccountMustFirstBeVerified = 50_178,
	YouDoNotHavePermissionToSendThisSticker = 50_600,
	TwoFactorIsRequiredForThisOperation = 60_003,
	NoUsersWithDiscordTagExist = 80_004,
	ReactionWasBlocked = 90_001,
	UserCannotUseBurstReactions = 90_002,
	ApplicationNotYetAvailableTryAgainLater = 110_001,
	APIResourceIsCurrentlyOverloadedTryAgainALittleLater = 130_000,
	TheStageIsAlreadyOpen = 150_006,
	CannotReplyWithoutPermissionToReadMessageHistory = 160_002,
	AThreadHasBeenAlreadyCreatedForThisMessage = 160_004,
	ThreadIsLocked = 160_005,
	MaximumNumberOfActiveThreadsReached = 160_006,
	MaximumNumberOfActiveAnnouncementThreadsReached = 160_007,
	InvalidJSONForUploadedLottieFile = 170_001,
	UploadedLottiesCannotContainRasterizedImagesSuchAsPNGOrJPEG = 170_002,
	StickerMaximumFramerateExceeded = 170_003,
	StickerFrameCountExceedsMaximumOf1000Frames = 170_004,
	LottieAnimationMaximumDimensionsExceeded = 170_005,
	StickerFrameRateIsEitherTooSmallOrTooLarge = 170_006,
	StickerAnimationDurationExceedsMaximumOf5Seconds = 170_007,
	CannotUpdateAFinishedEvent = 180_000,
	FailedToCreateStageNeededForStageEvent = 180_002,
	MessageBlockedByAutomaticModeration = 200_000,
	TitleBlockedByAutomaticModeration = 200_001,
	WebhooksPostedToForumChannelsMustHaveAThreadNameOrThreadID = 220_001,
	WebhooksPostedToForumChannelsCannotHaveBothAThreadNameAndThreadID = 220_002,
	WebhooksCanOnlyCreateThreadsInForumChannels = 220_003,
	WebhookServicesCannotBeUsedInForumChannels = 220_004,
	MessageBlockedByHarmfulLinksFilter = 240_000,
	CannotEnableOnboardingRequirementsAreNotMet = 350_000,
	CannotUpdateOnboardingWhileBelowRequirements = 350_001,
	FailedToBanUsers = 500_000,
	PollVotingBlocked = 520_000,
	PollExpired = 520_001,
	InvalidChannelTypeForPollCreation = 520_002,
	CannotEditAPollMessage = 520_003,
	CannotUseAnEmojiIncludedWithThePoll = 520_004,
	CannotExpireANonPollMessage = 520_006,
}