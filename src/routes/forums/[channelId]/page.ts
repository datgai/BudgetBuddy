
// Interface for message object
export interface Message {
    id: number;
    text: string;
    user_name: string;
    created_at: string;
    profile?: string;
  }
  
  
  // Function to scroll to the bottom of messages container
  export function scrollToBottom() {
    const messagesContainer = document.querySelector('.messages-container');
    if (messagesContainer) {
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
  }
  
  
  // Function to format message timestamp
  export function formatTime(timestamp: string): string {
  const messageTime = new Date(timestamp);
  const currentTime = new Date();
  const diff = Math.floor((currentTime.getTime() - messageTime.getTime()) / 1000); 
  
  if (diff < 60) {
    return 'just now';
  } else if (diff < 3600) {
    const minutes = Math.floor(diff / 60);
    return `${minutes} min${minutes > 1 ? 's' : ''} ago`;
  } else if (diff < 24 * 3600) {
    const hours = Math.floor(diff / 3600);
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  } else {
    const day = messageTime.getDate();
    const month = messageTime.getMonth() + 1;
    const year = messageTime.getFullYear() % 100;
    const hours = messageTime.getHours();
    const minutes = messageTime.getMinutes() < 10 ? '0' + messageTime.getMinutes() : messageTime.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    return `${month}/${day}/${year} ${formattedHours}:${minutes}${ampm}`;
  }
  }