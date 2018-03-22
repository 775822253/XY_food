Page({
  data: {
    markers: [{
      iconPath: "../image/positionMarker.png",
      id: 0,
      longitude: 116.811294,
      latitude: 32.679663,
      width: 50,
      height: 50,
      callout: {
        content: "鑫源土菜",
        color: "#4C4C4C",
        fontSize: 14,
        // x: 116.811294,
        // y: 32.679663,
        // borderWidth: 1,
        // borderColor: "#000000",
        borderRadius: 5,
        bgColor: "#FFFFFF",
        padding: 8,
        display: "ALWAYS",
        textAlign: "center",
      },
    }],
    controls: [{
      id: 1,
      iconPath: '../image/goThere.png',
      position: {
        left: wx.getStorageSync('phoneWidth') - 80 || 50,
        top: wx.getStorageSync('phoneHeight') - 80 || 50,
        width: 60,
        height: 60,
      },
      clickable: true
    }],
  },
  abc: function (e) {
    wx.openLocation({
      latitude: 39.98959,
      longitude: 116.60902,
      name: "花园桥肯德基",
      scale: 28
    }) 
  },
  onLoad: function () {
    
  }
})