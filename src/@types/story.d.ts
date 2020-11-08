export type ReactStory = {
  id?: number | string;
  media?: {
    url: string;
    mediaType: "image" | "video";
    backgroundColor?: string;
  };
  component?: React.ReactNode;
  duration?: number;
  autostart?: boolean;
};

export type ReactStoryTheme = "white" | "dark";

export type ReactStories = {
  id?: number | string;
  isViewed?: boolean;
  frameStroke?: string;
  backgroundColor?: string;
  backgroundImage?: string;
  title?: string;
  theme?: ReactStoryTheme;
  stories: ReactStory[];
};
