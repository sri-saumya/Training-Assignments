using System;

namespace realtimedelegatedemo
{
    class Program
    {
        static void Main(string[] args)
        {
            MediaStorage m = new MediaStorage();
            AudioPlayer ap = new AudioPlayer();
            VideoPlayer vp = new VideoPlayer();
            MediaStorage.PlayerMedia playerDelegate = ap.playaudio;
            playerDelegate = vp.playvideo; 
            m.ReportResult(playerDelegate, "mp3");
            m.ReportResult(playerDelegate, "mp4");

        }
    }
}
