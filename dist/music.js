const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
	{
        name: "平凡之路",
        artist: '朴树',
        url: 'http://www.ytmp3.cn/down/59211.mp3',
        cover: 'http://p1.music.126.net/W_5XiCv3rGS1-J7EXpHSCQ==/18885211718782327.jpg?param=130y130',
      },
	  {
        name: '哪里都是你',
        artist: '队长',
        url: 'https://sharefs.ali.kugou.com/202202132354/be5f1a15c58ed2461fc4e4f2f1b0fac5/G113/M01/00/15/UZQEAFmvs_GAWEvMADZhzt1fmGQ829.mp3',
        cover: 'http://p1.music.126.net/lnOnBbP_H-052Hv5ls-QjA==/109951162964628408.jpg?param=130y130',
      },
      {
        name: '你的酒馆对我打了烊',
        artist: '陈雪凝',
        url: 'http://www.ytmp3.cn/down/59770.mp3',
        cover: 'http://p1.music.126.net/LiRR__0pJHSivqBHZzbMUw==/109951163816225567.jpg?param=130y130',
      },
	  {
        name: '给你呀（又名：for ya）',
        artist: '蒋小呢',
        url: 'http://www.ytmp3.cn/down/75542.mp3',
        cover: 'http://p1.music.126.net/GI1Ex39x73zBT-1r7_o-sQ==/109951165494781109.jpg?param=130y130',
      },
      {
        name: 'Good Time',
        artist: 'Owl City&Carly Rae Jepsen',
        url: 'http://www.ytmp3.cn/down/34148.mp3',
        cover: 'http://p1.music.126.net/c5NVKUIAUcyN4BQUDbGnEg==/109951163221157827.jpg?param=130y130',
      }
    ]
});