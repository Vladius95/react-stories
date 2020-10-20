export type ReactStory = {
  id?: number | string;
  media?: {
    url: string;
    mediaType: "image" | "video";
  };
  component?: React.ReactNode;
  duration?: number;
  autostart?: boolean;
};

export type ReactStories = {
  id: number | string;
  isViewed?: boolean;
  frameStroke?: string;
  backgroundColor?: string;
  backgroundImage?: string;
  theme?: "white" | "dark";
  stories: ReactStory[];
};
