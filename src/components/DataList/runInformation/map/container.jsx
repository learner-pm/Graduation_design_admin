import React, { useEffect } from 'react';
import AMapLoader from '@amap/amap-jsapi-loader';

const Map = () => {
  useEffect(() => {
    AMapLoader.load({
      key: '7809e26a24a2c720a6b89f5953c90f13', // 申请好的Web端开发者Key，首次调用 load 时必填
      version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
      plugins: [''], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
    })
      .then((AMap) => {
        var marker,
          path = [
            [116.478935, 39.997761],
            [116.478939, 39.997825],
            [116.478912, 39.998549],
            [116.478912, 39.998549],
            [116.478998, 39.998555],
            [116.478998, 39.998555],
            [116.479282, 39.99856],
            [116.479658, 39.998528],
            [116.480151, 39.998453],
            [116.480784, 39.998302],
            [116.480784, 39.998302],
            [116.481149, 39.998184],
            [116.481573, 39.997997],
            [116.481863, 39.997846],
            [116.482072, 39.997718],
            [116.482362, 39.997718],
            [116.483633, 39.998935],
            [116.48367, 39.998968],
            [116.484648, 39.999861],
          ];
        const map = new AMap.Map('container', {
          //设置地图容器id
          resizeEnable: true,
          //viewMode: '2D', //是否为3D地图模式
          zoom: 17, //初始化地图级别
          center: [116.397428, 39.90923],
          // center: [116.397428, 39.90923], //初始化地图中心点位置
        });
        // 绘制轨迹
        marker = new AMap.Marker({
          map: map,
          position: [116.478935, 39.997761],
          icon: 'https://webapi.amap.com/images/car.png',
          offset: new AMap.Pixel(-26, -13),
          autoRotation: true,
          angle: -90,
        });
        var polyline = new AMap.Polyline({
          map: map,
          path,
          showDir: true,
          strokeColor: '#28F', //线颜色
          // strokeOpacity: 1,     //线透明度
          strokeWeight: 6, //线宽
          // strokeStyle: "solid"  //线样式
        });
        // map.Polyline({
        //   path,
        // });
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <>
      <div id="container" className="map" style={{ height: '100%' }}></div>
    </>
  );
};

export default Map;
