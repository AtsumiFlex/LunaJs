// https://discord.com/developers/docs/topics/gateway-events#auto-moderation

import type { Snowflake } from "@aurajs/core";

// https://discord.com/developers/docs/topics/gateway-events#auto-moderation-action-execution-auto-moderation-action-execution-event-fields
export type AutoModerationActionExecutionEventFields = {
	action: object;
	// TODO: Auto Moderation Action Object
	alert_system_message_id?: Snowflake;
	channel_id?: Snowflake;
	content: string;
	guild_id: Snowflake;
	matched_content: string | null;
	matched_keyword: string | null;
	message_id?: Snowflake;
	rule_id: Snowflake;
	rule_trigger_type: any;
	// TODO: Trigger Types
	user_id: Snowflake;
};
