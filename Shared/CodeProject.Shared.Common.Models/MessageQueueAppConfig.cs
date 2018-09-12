﻿using System;
using System.Collections.Generic;
using System.Text;

namespace CodeProject.Shared.Common.Models
{
	public class MessageQueueAppConfig
	{
		public string ExchangeName { get; set; }
		public string RoutingKey { get; set; }
		public string InboundMessageQueue { get; set; }
		public string OutboundMessageQueues { get; set; }
		public string LoggingExchangeName { get; set; }
		public string LoggingMessageQueue { get; set; }
		public string OriginatingQueueName { get; set; }
		public Boolean SendToLoggingQueue { get; set; }
		public string AcknowledgementMessageExchangeSuffix { get; set; }
		public string AcknowledgementMessageQueueSuffix { get; set; } 
		public string TriggerExchangeName { get; set; }
		public string TriggerQueueName { get; set; }
		public Boolean QueueImmediately { get; set; }
		public string InboundSemaphoreKey { get; set; }
		public string OutboundSemaphoreKey { get; set; }
	}
}
