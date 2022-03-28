import React, { useEffect } from 'react';
import './index.less';
import AMapLoader from '@amap/amap-jsapi-loader';

const Map = () => {
  useEffect(() => {
    AMapLoader.load({
      key: '7809e26a24a2c720a6b89f5953c90f13', // 申请好的Web端开发者Key，首次调用 load 时必填
      version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
      plugins: [''], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
    })
      .then((AMap) => {
        new AMap.Map('container', {
          //设置地图容器id
          viewMode: '3D', //是否为3D地图模式
          zoom: 5, //初始化地图级别
          center: [105.602725, 37.076636], //初始化地图中心点位置
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <>
      <div id="container" className="map" style={{ height: '800px' }}></div>
    </>
  );
};

export default Map;
