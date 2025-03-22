export function getTextsGroupedFromMarkdown(markdown: string) {
  const regex = /(\*\*.*?\*\*)|(.*?)(?=\*\*|$)/g;
  const matches = markdown.match(regex);
  if (!matches) return [];

  const texts = matches.filter((text) => text !== "");

  return texts;
}
