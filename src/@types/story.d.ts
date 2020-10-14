export type Story = {
  id?: number | string;
  media?: {
    url: string;
    mediaType: "image" | "video";
  };
  component?: React.ReactNode;
  duration?: number;
  autostart?: boolean;
};
