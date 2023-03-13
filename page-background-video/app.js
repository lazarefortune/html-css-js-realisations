const backgroundVideo = document.querySelector('#backgroundVideo')
const btnVideo = document.querySelector('#btnVideo')

btnVideo.addEventListener('click', () => {
    playAndPause(backgroundVideo, btnVideo)
})

function playAndPause(video, buttonVideo) {
    if (video.paused) {
        video.play()
        buttonVideo.innerHTML = "Pause II"
    } else {
        video.pause()
        buttonVideo.innerHTML = "Lecture ▶"
    }
}