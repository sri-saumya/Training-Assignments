using System;
using System.Collections.Generic;
using System.Text;

namespace realtimedelegatedemo
{
    class AudioPlayer
    {
        private int audiostatus;

        public int playaudio(string type)
        { 
        
            if(type== "mp3")
            {

                audiostatus = 0;
            }
            else
                {
                audiostatus = -1;
            }

            return audiostatus;
        }
    }
}
