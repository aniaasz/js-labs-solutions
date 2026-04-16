const angleToRadian = function(angle) {
    return Math.PI/180 * angle;
}


function narysujLogo(){
    const canvas = document.getElementById('canvaslogo');
    if (canvas.getContext) {
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Koło
        ctx.fillStyle = '#000000';
        ctx.arc(50, 50, 48, 0, angleToRadian(360));
        ctx.stroke()

        ctx.fillStyle = '#ffffff';
        ctx.arc(50, 50, 47, 0, angleToRadian(360));
        ctx.fill()

        // H z prostokątów
        ctx.fillStyle = 'rgba(60,70,145,0.94)';
        ctx.fillRect(25, 25, 12, 50);
        ctx.fillRect(58, 25, 12, 50);
        ctx.fillRect(37, 44, 21, 12);

        // S jako tekst
        ctx.fillStyle = 'rgba(60,70,145,0.85)';
        ctx.font = 'bold 70px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('S', 60, 65);


        // Trójkąt
        ctx.beginPath();
        ctx.fillStyle = 'rgba(60,70,145,0.19)';
        ctx.moveTo(50, 15);
        ctx.lineTo(85, 80);
        ctx.lineTo(15, 80);
        ctx.closePath();
        ctx.fill();

    }
}

narysujLogo();