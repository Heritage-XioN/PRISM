from fastapi import FastAPI

# the fastapi instance
app = FastAPI()


# default health check endpoint
@app.get("/")
async def main() -> dict[str, str]:
    return {"status": "prism server is live"}
