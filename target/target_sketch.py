"""
pyp5js
Copyright (C) 2019-2021 Bernardo Fontes

This program is free software; you can redistribute it and/or
modify it under the terms of the GNU Lesser General Public
License as published by the Free Software Foundation; either
version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
"""
from pyp5js import *

def preload():
    pass

def setup():
    pass

def draw():
    pass

deviceMoved = None
deviceTurned = None
deviceShaken = None
keyPressed = None
keyReleased = None
keyTyped = None
mouseMoved = None
mouseDragged = None
mousePressed = None
mouseReleased = None
mouseClicked = None
doubleClicked = None
mouseWheel = None
touchStarted = None
touchMoved = None
touchEnded = None
windowResized = None
keyIsDown = None


windowW = 1000
windowH = 500
marginX = windowW/10
marginY = marginX
numTicks = 10
frames = 60
universalSpeed = 0.005
paused = False
running = False

class ripples():
    def __init__(self, x, y):
        self.x = x
        self.y = y
        self.startStroke = 255
        self.startSize = 10
        self.alive = True
        
    def display(self):
        background(0)
        noFill()
        ellipse(self.x, self.y, self.startSize, self.startSize)
        stroke(self.startStroke, self.startStroke, self.startStroke)
        self.startStroke -= 7
        self.startSize += 3
        if self.startSize > 200:
            self.startStroke = 0
            self.alive = False
        
class button():
    def __init__(self, x, y):
        self.x = x
        self.y = y
        self.pressed = False
        self.over = 0
    def check(self):
        if mousePressed:
            if (mouseX>self.x-25 and mouseX<self.x+25 and mouseY>self.y-25 and mouseY< self.y+25):
                self.pressed = True
               # print("pressed")
            else:
                self.pressed = False
        else:
            self.pressed = False
    def display(self):
        fill(255)
        ellipse(self.x, self.y, 50, 50)
        stroke(3)
        ellipse(self.x, self.y, 43, 43)
        noStroke()
        if (mouseX>self.x-25 and mouseX<self.x+25 and mouseY>self.y-25 and mouseY< self.y+25):
            fill(100)
            ellipse(self.x, self.y, 50, 50)
            stroke(3)
            ellipse(self.x, self.y, 43, 43)
            noStroke()
            self.over = 1
        else:
            self.over = 0

class particle():
    def __init__(self, x, y, w, h, speed):
        self.x = x
        self.y = y
        self.w = w
        self.h = h
        self.speed = speed
    def move(self):
        self.y = position.y
    def display(self):
        fill(255)
        ellipse(self.x, self.y, self.w, self.h)

class particleP():
    def __init__(self, x, y, w, h, speed):
        self.x = x
        self.y = y
        self.w = w
        self.h = h
        self.speed = speed
        self.visible = True
        
    def move(self):
        if self.x < (windowW-marginX):
            self.x += 400*self.speed
            self.y = (windowH/2)-(100*(sin(self.x/45)))
            #print(self.x, self.y)
        else:
            fill(0)
            rect(0, 0, windowW, windowH)
            self.x = marginX
            
        if self.x == marginX:
            self.y = 158.705472946 + 10
            
    def display(self):
        if self.visible == True:
            fill(255)
            noStroke()
            ellipse(self.x, self.y, self.w, self.h)
        elif self.visible == False:
            pass

class particleV():
    def __init__(self, x, y, w, h, speed):
        self.x = x
        self.y = y
        self.w = w
        self.h = h
        self.speed = speed
        self.visible = True
        
    def move(self):
        if self.x < (windowW-marginX):
            self.x += 400*self.speed
            self.y = (windowH/2)-(100*(cos(self.x/45)))
            #print(self.x, self.y)
            # fill(0, 150, 150)
            # ellipse(self.x, self.y, self.w, self.h)
        else:
            fill(0)
            rect(0, 0, windowW, windowH)
            self.x = marginX
            
        if self.x == marginX:
            self.y = self.y1 + windowH
            
    def display(self):
        if self.visible == True:
            fill(0, 200, 200)
            noStroke()
            ellipse(self.x, self.y, self.w, self.h)
        elif self.visible == False: 
            fill(0)
            ellipse(self.x, self.y, self.w, self.h)

class particleA():
    def __init__(self, x, y, w, h, speed):
        self.x = x
        self.y = y
        self.w = w
        self.h = h
        self.speed = speed
        self.visible = True

    def move(self):
        if self.x < (windowW-marginX):
            self.x += 400*self.speed
            self.y = (windowH/2)-(100*(-sin(self.x/45)))
            #print(self.x, self.y)
            # fill(150, 0, 150)
            # ellipse(self.x, self.y, self.w, self.h)
        else:
            fill(0)
            rect(0, 0, windowW, windowH)
            self.x = marginX      
            
        if self.x == marginX:
            self.y = self.y1 + windowH
            
    def display(self):
        if self.visible == True:
            fill(200, 0, 200)
            noStroke()
            ellipse(self.x, self.y, self.w, self.h)
        elif self.visible == False:
            fill(0)
            ellipse(self.x, self.y, self.w, self.h)
        
position = particleP(marginX, windowH-marginY, 10, 10, universalSpeed)
velocity = particleV(marginX, windowH-marginY, 10, 10, universalSpeed)
acceleration = particleA(marginX, windowH-marginY, 10, 10, universalSpeed)
baseParticle = particle(marginX/2, windowH-marginY, 20, 20, universalSpeed)
trails = False
clicked = 0
btrails = button(50, 50)
bposition = button(800, 50)
bvelocity = button(875, 50)
bacceleration = button(950, 50)
bstart = button(windowW/2, windowH/2+10)

pe = False
ve = False
ae = False

rippleList = []

def setup():
    size(windowW, windowH)
    background(0)
    frameRate(frames)
    
def draw():
    
    if running == False:
        textSize(48)
        if mousePressed:
            rippleList.append(ripples(mouseX, mouseY))
        for r in rippleList:
#            r.startSize += 10
            r.display()
            if r.alive == False:
                rippleList.remove(r)
        bstart.check()
        bstart.display()
        fill(255)
        text("PVA Visualizer", (windowW/2)-160, (windowH/2)-40)
        textSize(20)
        text("Jesse Saranow", (windowW/2)-70, (windowH/2)-90)        
        textSize(48)
        
    if running == True:
        
        frameRate(frames)
    
        position.move()
        velocity.move()
        acceleration.move()
        baseParticle.move()
        
        btrails.check()
        if trails == True:
        

            if pe == False:
                position.visible == False
            if ve == False:
                velocity.visible == False
            if ae == False:
                acceleration.visible == False
            fill(0)
            rect(0, 0, marginX-1, windowH)
        
            btrails.display()

            noFill()
            stroke(0, 0, 255)
            strokeWeight(2)
            ellipse(btrails.x, btrails.y, 43, 43)
            noStroke()
            
            
        elif trails == False:
            fill(0)
            rect(0, 0, windowW, windowH)
            btrails.display()

        fill(255)
        textSize(15)
        text("Visualize Graph", btrails.x+30, btrails.y+5)
        textSize(36)
        
        bposition.check()
        bposition.display()
        fill(0)
        text("P", bposition.x-12, bposition.y+12)
        bvelocity.check()
        bvelocity.display()
        fill(0)
        text("V", bvelocity.x-12, bvelocity.y+12)
        bacceleration.check()
        bacceleration.display()
        fill(0)
        text("A", bacceleration.x-12, bacceleration.y+12)
        
        if pe == True:
            stroke(0, 0, 255)
            strokeWeight(2)
            noFill()
            ellipse(bposition.x, bposition.y, 43, 43)
            position.display()
            noStroke()
            
        if ve == True:
            stroke(0, 0, 255)
            strokeWeight(2)
            noFill()
            ellipse(bvelocity.x, bvelocity.y, 43, 43)
            velocity.display()
            noStroke()
        if ae == True:
            stroke(0, 0, 255)
            strokeWeight(2)
            noFill()
            ellipse(bacceleration.x, bacceleration.y, 43, 43)
            acceleration.display()
            noStroke()
    
        # bposition.check()
        # bposition.display()
        # if bposition.pressed == True:
        #     position.display()
        # else:
        #     position.display()    
                
        # bvelocity.check()
        # bvelocity.display()
        # if bvelocity.pressed == True:
        #     velocity.display()
        # else:
        #     velocity.display()
    
        # bacceleration.check()
        # bacceleration.display()
        # if bacceleration.pressed == True:
        #     acceleration.display()
        # else:
        #     acceleration.display()
    
        strokeWeight(2)
        stroke(255)
        line(marginX, windowH/2, windowW-marginX, windowH/2)
        line(marginX, windowH-marginY, marginX, marginY)
        strokeWeight(3)
        line(marginX-65, windowH/2, marginX-35, windowH/2)
        strokeWeight(2)
        noStroke()
        fill(255)
        
        if (pe == True and ve == True):
            if (abs(position.x - velocity.x) < 10) and (abs(position.y - velocity.y) < 10):
                fill(255, 255, 0)
                ellipse(position.x, position.y, 10, 10)
        if (pe == True and ae == True):    
            if (abs(position.x - acceleration.x) < 10) and (abs(position.y - acceleration.y) < 10):
                fill(255, 255, 0)
                ellipse(position.x, position.y, 10, 10)
        if(ae == True and ve == True):
            if (abs(acceleration.x - velocity.x) < 10) and (abs(acceleration.y - velocity.y) < 10):
                fill(255, 255, 0)
                ellipse(velocity.x, velocity.y, 10, 10)    
                
        baseParticle.display()
    
        textSize(15)
        text("Press Q to quit", marginX/3, windowH-20)
        
        global frames
        if keyPressed:
            if key == ".":
                frames += 5
            if key == ",":
                if frames <= 10:
                    frames = 5
                else:
                    frames -= 5
    
def keyPressed():   
    global paused 
    global running
    if key == " ":
        if paused == False:
            paused = not paused
            print(paused)
            noLoop()
        elif paused == True:
            paused = not paused
            print(paused)
            loop()
        else:
            loop()
    elif key == "q":
        fill(0)
        rect(0, 0, windowW, windowH)
        running = False
            
def mouseClicked():
    global pe
    global ve
    global ae
    global running
    global trails 
    
    if (mouseX>btrails.x-25 and mouseX<btrails.x+25 and mouseY>btrails.y-25 and mouseY< btrails.y+25 and trails == False): 
        trails = not trails 
    elif (mouseX>btrails.x-25 and mouseX<btrails.x+25 and mouseY>btrails.y-25 and mouseY< btrails.y+25 and trails == True): 
        trails = not trails 
        
    if (mouseX>bposition.x-25 and mouseX<bposition.x+25 and mouseY>bposition.y-25 and mouseY< bposition.y+25) and (pe == False):
        pe = True
        return not pe
    if (mouseX>bposition.x-25 and mouseX<bposition.x+25 and mouseY>bposition.y-25 and mouseY< bposition.y+25) and (pe == True):
        pe = False
        return not pe
    if (mouseX>bvelocity.x-25 and mouseX<bvelocity.x+25 and mouseY>bvelocity.y-25 and mouseY< bvelocity.y+25) and (ve == False):
        ve = True
        return not ve
    if (mouseX>bvelocity.x-25 and mouseX<bvelocity.x+25 and mouseY>bvelocity.y-25 and mouseY< bvelocity.y+25) and (ve == True):
        ve = False
        return not ve
    if (mouseX>bacceleration.x-25 and mouseX<bacceleration.x+25 and mouseY>bacceleration.y-25 and mouseY< bacceleration.y+25) and (ae == False):
        ae = True
        return not ae
    if (mouseX>bacceleration.x-25 and mouseX<bacceleration.x+25 and mouseY>bacceleration.y-25 and mouseY< bacceleration.y+25) and (ae == True):
        ae = False
        return not ae
    if (mouseX>bstart.x-25 and mouseX<bstart.x+25 and mouseY>bstart.y-25 and mouseY< bstart.y+25):
        running = True 


event_functions = {
    "deviceMoved": deviceMoved,
    "deviceTurned": deviceTurned,
    "deviceShaken": deviceShaken,
    "keyPressed": keyPressed,
    "keyReleased": keyReleased,
    "keyTyped": keyTyped,
    "mouseMoved": mouseMoved,
    "mouseDragged": mouseDragged,
    "mousePressed": mousePressed,
    "mouseReleased": mouseReleased,
    "mouseClicked": mouseClicked,
    "doubleClicked": doubleClicked,
    "mouseWheel": mouseWheel,
    "touchStarted": touchStarted,
    "touchMoved": touchMoved,
    "touchEnded": touchEnded,
    "windowResized": windowResized,
    "keyIsDown": keyIsDown,
}

start_p5(preload, setup, draw, event_functions)