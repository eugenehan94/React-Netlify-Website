// Function to open link in new tab
const OpenInNewTab = (link: string) => {
  window.open(link, "_blank", "noopener noreferrer");
};

export default OpenInNewTab;
