from fastapi import FastAPI, File, UploadFile
from fastapi.responses import JSONResponse
from inference_sdk import InferenceHTTPClient
import os
import json
import shutil

app = FastAPI()

UPLOAD_DIR = "uploads"
RESULTS_DIR = "results"

os.makedirs(UPLOAD_DIR, exist_ok=True)
os.makedirs(RESULTS_DIR, exist_ok=True)

client = InferenceHTTPClient(
    api_url="http://localhost:9001",
    api_key="tTDrLxLagxRSuf8l01b0"
)

@app.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    # Save the uploaded file
    file_path = os.path.join(UPLOAD_DIR, file.filename)
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    # Run inference
    result = client.run_workflow(
        workspace_name="personal-3nuwe",
        workflow_id="image-det-obj-count-vizualize",
        images={"image": file_path}
    )

    result_path = os.path.join(RESULTS_DIR, f"{os.path.splitext(file.filename)[0]}_result.json")
    with open(result_path, "w", encoding="utf-8") as f:
        json.dump(result, f, indent=4, ensure_ascii=False)

    return JSONResponse(content={"message": "Success", "result_path": result_path, "result": result})
