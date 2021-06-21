/* eslint-disable react-hooks/rules-of-hooks */
/**
 * This is a library of the globally used templates
 */
import useScrollPosition from '../../hooks/scroll';
import { changeRoute } from '../../lib/actions';
import { siteNavigation, siteFooterText } from '../../lib/settings';
import Wave from 'react-wavify';

// Top side navigation
export function navigation(): JSX.Element {
  const scrollPos = useScrollPosition();
  const points = (window.innerWidth > 480) ? 8 : 4;
  const topWaveName = (scrollPos.y > 160) ? 'active' : '';
  
  const entries = siteNavigation.list.map ((item, num) => // item[0] is name, item[1] is url (all strings)
    <span
      key = { `nav_${ num }` }
      onClick = { () => { changeRoute(item[1]) } }
    >{ item[0] }</span>
  );
  return (
    <nav>
      <div className = { `top-wave ${topWaveName}` }>
        <Wave paused = { false } options={{ height: 240, amplitude: 25, speed: 0.26, points: points + 2 }} />
        <Wave paused = { false } options={{ height: 240, amplitude: 24, speed: 0.25, points: points }} />
        <Wave paused = { false } options={{ height: 240, amplitude: 23, speed: 0.24, points: points - 2 }} />
      </div>
      { entries }
    </nav>
  );
};

// Bottom side footer section
export function footer(): JSX.Element {
  return (<footer><span>{ siteFooterText }</span></footer>);
}