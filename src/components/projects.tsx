import templateProjects from './template/projects';
import '../resources/projects.scss';
import useScrollPosition from '../hooks/scroll';
import addX from '../hooks/addx';

export default function Projects() {
  const scrollPos = useScrollPosition();

  // This function constantly rerender React
  // It fixes the bug for the mobile menu not updating until other events
  addX();

  const template = new templateProjects(scrollPos);
  return(template.output());
}