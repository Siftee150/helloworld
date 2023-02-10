# Helloworld in Google Kubernetes Engine (GKE)
This is a basic hello world api, with the ability to be containerized into docker image. <br>
The following are the steps to upload it to google kubernetes engine:<br>
1) First, clone this repo.
2) Create an account on  https://console.cloud.google.com/ (you must associate a bank account to avail the features of Google Cloud Platform. However, you could opt for the free-trial and not be actually billed)
3) In the dashboard of your account, create a new GCP project or select an an already existing, empty project.<img width="931" alt="image" src="https://user-images.githubusercontent.com/62537864/218127223-46ef0320-ac27-4b22-8c09-5f554a68637b.png">
4) Every project is associated with a unique project id in GCP. Copy that project id after clicking onto the project of your choice. (profound-actor-377311 in our case)
5) Now, install gcloud SDK for your respective operating system (https://cloud.google.com/sdk/docs/quickstarts). 
6) Once installation is complete, on the installed gcloud sdk shell, run **"gcloud init"** and login, authorize and select the project
7) Run (you could start a new terminal as well, no need to do this on gcloud sdk shell) cmd **"gcloud components list"** to see the list of components already existing in your gcloud sdk package. (Note: If it's your first time, kubernetes (docker images orchestration tool)  and Docker Google Cloud Registry (storage for docker images) will not be present)
8) To install kubectl: run cmd **" gcloud components install kubectl"**
9) To install Docker GCP, run cmd **" gcloud components install docker-credential-gcr"**
10) After a successful installation, running **"gcloud components list"** will show this-><img width="515" alt="image" src="https://user-images.githubusercontent.com/62537864/218130001-20ac18ac-0fe4-4a8c-b27e-47fd78103a1e.png">
11) Now, the meaty bit! Create a docker image of this hello-world-api-project by typing "**docker-compose up**" in the project directory in the terminal
12) Check if the image has been created by running **"docker images"**. It should display a list with this name included-> <img width="649" alt="image" src="https://user-images.githubusercontent.com/62537864/218131917-a1ca2919-2188-45cf-9bc2-e2df28fc7ff4.png">
13) Run cmd: **"gcloud auth configure-docker"** to authorize
14) Tag the image for GCR: "docker tag local-docker-image-name:associated-tag gcr.io/project-ID/name-for-uploaded-gcr-image" ..like this way-> <img width="686" alt="image" src="https://user-images.githubusercontent.com/62537864/218132941-12e9beb7-c782-43a9-9f60-8551cb98a8a2.png">
15) Running **"docker images"** gives-><br><img width="639" alt="image" src="https://user-images.githubusercontent.com/62537864/218133547-316b44aa-cc48-4149-a8b4-840d1ca6c7d4.png">
16) Let's push the above created image to Google cloud registry now! The following command **"docker push gcr.io/profound-actor-377311/demoapp** will do so in our case.
17) Now that we have pushed the docker image to GCP, we have to deploy it in kubernetes. For the same, set the config parameters beforehand, else the next command will raise error:<br><img width="202" alt="image" src="https://user-images.githubusercontent.com/62537864/218138298-0cd54692-7231-4125-b57b-5e3d21e68671.png">
18) Now we define and create our cluster for kubernetes by the command: **"gcloud container clusters create demo-cluster --num-nodes=2"**. The following command creates a 2-node cluster named "demo-cluster". This might take some time, depending on net speed.
19) To verify the 2 cluster instances have been created for the 2 nodes specified in above command, run the cmd: **"gcloud compute instances list"** <br> <img width="764" alt="image" src="https://user-images.githubusercontent.com/62537864/218139777-b5a28ab8-d5f6-4647-9d4e-6501ad093cd9.png"> <br> OR you can use the web GUI and see the cluster on Kubernetes Enginer/ Clusters: <img width="529" alt="image" src="https://user-images.githubusercontent.com/62537864/218140254-579c4a8e-1056-46da-b346-178636166866.png">
20) Next, we deploy the app as workload using the following cmd-> "kubectl create deployment demoapp --image=gcr.io/<projectID>/demoapp". (Note: the image name is the name of the docker image you created in step 14. We can see the deployed app in kubenetes/workloads-><br><img width="731" alt="image" src="https://user-images.githubusercontent.com/62537864/218143421-11aeda90-92bc-4379-a3a1-c08f13b5780a.png">
21) Click on the workload above, and go to "Exposing services" tab and click on the "Expose" button-> <br><img width="519" alt="image" src="https://user-images.githubusercontent.com/62537864/218144298-981316b7-9ac0-4101-98e0-136a30773eb5.png">
22) The following page will appear, add in your choice of port that the application will be exposed through it. <br><img width="470" alt="image" src="https://user-images.githubusercontent.com/62537864/218144836-e9220934-0e12-4d62-a2a6-6b440ad0a16a.png">
23) Then the "Expose services" tab will have an option like this-><br> <img width="521" alt="image" src="https://user-images.githubusercontent.com/62537864/218145050-94071ffa-7730-4a07-a6ff-499a1aa15e49.png">
24) Follow the link under the "Endpoints" option. Taa daa! We see our hello world response on the link!<br><img width="616" alt="image" src="https://user-images.githubusercontent.com/62537864/218145294-55d4aa8a-9c42-47fa-8b42-d94d43b38c13.png">







