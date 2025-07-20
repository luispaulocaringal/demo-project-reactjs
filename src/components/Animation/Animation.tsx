import { fadeInUp, fadeInDown } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';

export function FadeInUp(
  { component, className, children, duration } : 
  { 
    component: string, 
    className: string,
    children: any, 
    duration:string 
  }
) {
  const Component:any = component;

  const styles = StyleSheet.create({
    fadeInUp: {
      animationName: fadeInUp,
      animationDuration: duration
    }
  });

  return (
    <Component className={className + " " + css(styles.fadeInUp)}>
      {children}
    </Component>
  )
}

export function SlideOutDown(
  { component, className, children, duration } : 
  { 
    component: string, 
    className: string,
    children: any, 
    duration:string 
  }
) {
  const Component:any = component;

  const styles = StyleSheet.create({
    fadeInDown: {
      animationName: fadeInDown,
      animationDuration: duration
    }
  });

  return (
    <Component className={className + " " + css(styles.fadeInDown)}>
      {children}
    </Component>
  )
}