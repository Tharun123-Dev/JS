# for n in range(1,101):
#     count=0
#     for i in range(1,n+1):
#         if n%i==0:
#             count+=1
#     if count==2:
#         print(n)



# n=12
# for j in range(2,n+1):
#     if n%j==0:
#         print("non prime")   
#         break
#     else:
#      print("prime")
#      break
      
# n=13
# if n>1:
#    for i in range(2,n):
#        if n%i==0:
#           print("not prime")
#           break
#    else:
#         print("prime")    
# else:
#    print("not prime")


#patterns
#1 H
row=5
for i in range (0,row):
    s=""
    for j in range (0,row):
        if j==0 or j==4:
            s+="* "
        elif i==(row//2):
            s+="* "
        else:
            s+="  "
    print(s)   


#1 A
row=5
for i in range (0,row):
    s=""
    for j in range (0,row):
        if j==0 or j==4:
            s+="* "
        elif j==i:
            s+="* "
        else:
            s+="  "
    print(s)   

#1 Z
row=5
for i in range (0,row):
    s=""
    for j in range (0,row):
        if i==0 or i==4:
            s+="* "
        elif i+j==(row-(1)):
            s+="* "
        else:
            s+="  "
    print(s)  

    #1 Z
row=5
for i in range (0,row):
    s=""
    for j in range (0,row):
        if i==0 :
            s+="* "
        elif j==(row//2):
            s+="* "
        else:
            s+="  "
    print(s) 


#6 P
row=5
for i in range (0,row):
    s=""
    for j in range (0,row):
        if i==0 or i==2:
            s+="* "
        elif j==0 :
            s+="* "
        elif j==4 and i<(row//2) :
            s+="* "
        else:
            s+="  "
    print(s) 

# #7 traingle
# row=5
# for i in range (0,row):
#     s=""
#     for j in range (0,9):
#         if j<(9//2) and i+j==4:
#             s+="* "
#         elif i==4 :
#             s+="* "
#         elif j>(row//2) and j-i==4 :
#             s+="* "
#         else:
#             s+="  "
#     print(s) 
# # #7 traingle
# row=4
# for i in range (0,row):
#     s=""
#     for j in range (0,9):
#         if j<(9//2) and i+j==4:
#             s+="* "
#         # elif i==4 :
#         #     s+="* "
#         elif j>(row//2) and j-i==4 :
#             s+="* "
#         else:
#             s+="  "
#     print(s) 
# row=5
# for i in range (0,row):
#     s=""
#     for j in range (0,9):
#         if j<(9//2) and i==j:
#             s+="* "

#         elif j>(row//2) and i+j==8:
#             s+="* "
#         else:
#             s+="  "
#     print(s) 