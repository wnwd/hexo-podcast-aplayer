
hexo.extend.tag.register('aplayer', function(args, content){
    let name = args[0];
    let artist = args[1];
    let url = args[2];
    let cover = args[3];
  return `
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.css">
    <div id="aplayer"></div>
    <script src="https://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.js"></script>
    <script>
        const ap = new APlayer({
        container: document.getElementById('aplayer'),
        audio: [{
            name: '${name}',
            artist: '${artist}',
            url: '${url}',
            cover: '${cover}'
        }]
      });
    </script>
 `
}, {ends: false})