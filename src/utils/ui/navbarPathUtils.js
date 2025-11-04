export function isProjectPage(path) {
  const namePage = ["/blog", "/about", "/fun", "/projects"];
  const pathSegments = path.split("/").filter(Boolean);
  return pathSegments.length === 1 && !namePage.includes(`/${pathSegments[0]}`);
}
