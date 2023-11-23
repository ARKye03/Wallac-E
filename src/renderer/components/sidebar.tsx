import SidebarButton from './sidebarbutton';
import { GithubIcon, GraphIcon, HomeIcon, HulkIcon } from './svgicons';

function Sidebar() {
  return (
    <div className="bg-Surface1 h-screen flex flex-col items-center gap-8">
      <SidebarButton href="/">
        <HomeIcon />
      </SidebarButton>
      <SidebarButton href="/hulk">
        <HulkIcon />
      </SidebarButton>
      <SidebarButton href="/Graph">
        <GraphIcon />
      </SidebarButton>
      <div className="flex flex-col justify-end">
        <SidebarButton href="https://github.com">
          <GithubIcon />
        </SidebarButton>
      </div>
    </div>
  );
}
export default Sidebar;
