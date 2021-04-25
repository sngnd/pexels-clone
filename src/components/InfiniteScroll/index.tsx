// import { FC, useEffect } from "react";
// import ReactDOM from "react-dom";
// import {
//   fetchCuratedPhotos,
//   fetchPhotos,
// } from "../../store/actions/photosActions";

// interface InfiniteScrollProps {
//   loading: boolean;
//   error: string;
// }

// const InfiniteScroll: FC<InfiniteScrollProps> = ({loading, error}) => {

//   useEffect(() => {
//     window.addEventListener("scroll", scrollListener);
//     return () => {
//       window.removeEventListener("scroll", scrollListener);
//     }
//   }, [])

//   const scrollListener = () => {

//     if (bottomPosition < Number(this.props.threshold)) {
//       this.detachScrollListener();
//       this.props.loadMore();
//     }
//   }

//   detachScrollListener () {
//     const el = this.targetElement();
//     el.removeEventListener('scroll', this.scrollFunction, true);
//     el.removeEventListener('resize', this.scrollFunction, true);
//   }

//     return (
//       <div className="redux-lazy-scroll" style={{height: this.props.parentHeight, overflow: 'scroll'}}>
//         {this.props.children}
//       </div>
//     );
// };

const wf = () => {
  return <div></div>;
};

export default wf;
