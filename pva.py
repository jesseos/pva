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
        self.startStroke -= 3
        self.startSize += 5
        if self.startSize > 150:
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
        if position.x > 0:
            self.y = position.y
        else:
            self.y = self.y
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
        self.y1 = (windowH/2)-(100*(cos(self.x/45)))
        
        
    def move(self):
        if self.x < (windowW-marginX):
            self.x += 400*self.speed
            self.y = (windowH/2)-(100*(sin(self.x/45)))
            #print(self.x, self.y)
        else:
            self.visible == False
            self.y = self.y1
            self.x = marginX
            fill(0)
            rect(0, 0, windowW, windowH)
            
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
        self.y1 = y

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
            self.y = self.y1
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
        self.y1 = y

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
            self.y = self.y1
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
        
position = particleP(marginX, 158.705472946, 10, 10, universalSpeed)
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


    f = loadFont("TwCenMT-Bold-48.vlw")
    textFont(f)
    
def draw():
    if running == False:
        textSize(48)
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
        textSize(48)
        
        bposition.check()
        bposition.display()
        fill(0)
        text("p", bposition.x-13, bposition.y+7)
        bvelocity.check()
        bvelocity.display()
        fill(0)
        text("v", bvelocity.x-13, bvelocity.y+10)
        bacceleration.check()
        bacceleration.display()
        fill(0)
        text("a", bacceleration.x-13, bacceleration.y+10)
        
        if pe == True:
            stroke(200, 200, 0)
            strokeWeight(2)
            noFill()
            ellipse(bposition.x, bposition.y, 43, 43)
            position.display()
            noStroke()
            
        if ve == True:
            stroke(0, 200, 200)
            strokeWeight(2)
            noFill()
            ellipse(bvelocity.x, bvelocity.y, 43, 43)
            velocity.display()
            noStroke()
        if ae == True:
            stroke(200, 0, 200)
            strokeWeight(2)
            noFill()
            ellipse(bacceleration.x, bacceleration.y, 43, 43)
            acceleration.display()
            noStroke()
    

        strokeWeight(1)
        stroke(255)
        line(marginX, windowH/2, windowW-marginX, windowH/2)
        line(marginX, windowH-marginY, marginX, marginY)
        strokeWeight(3)
        line(marginX-65, windowH/2, marginX-35, windowH/2)
        strokeWeight(1)
        noStroke()
        fill(255)
        
        if (pe == True and ve == True and position.x != marginX):
            if (abs(position.x - velocity.x) < 10) and (abs(position.y - velocity.y) < 10):
                fill(255, 255, 0)
                ellipse(position.x, position.y, 10, 10)
        if (pe == True and ae == True and position.x != marginX):    
            if (abs(position.x - acceleration.x) < 10) and (abs(position.y - acceleration.y) < 10):
                fill(255, 255, 0)
                ellipse(position.x, position.y, 10, 10)
        if(ae == True and ve == True and velocity.x != marginX):
            if (abs(acceleration.x - velocity.x) < 10) and (abs(acceleration.y - velocity.y) < 10):
                fill(255, 255, 0)
                ellipse(velocity.x, velocity.y, 10, 10)    
                
        baseParticle.display()
    
        textSize(15)
        text("Press Q to quit", marginX/3, windowH-20)
        
        fill(255)
        
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

#def mousePressed():


    
def mouseClicked():
    global pe
    global ve
    global ae
    global running
    global trails

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
   
    if (mouseX>btrails.x-25 and mouseX<btrails.x+25 and mouseY>btrails.y-25 and mouseY< btrails.y+25 and trails == False):
        trails = not trails 
        print trails
        
    elif (mouseX>btrails.x-25 and mouseX<btrails.x+25 and mouseY>btrails.y-25 and mouseY< btrails.y+25 and trails == True):
        trails = not trails
        print trails
    
    
    
    #if running == False:
     #   rippleList.append(ripples(mouseX, mouseY))
    