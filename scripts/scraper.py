import json
from datetime import datetime

def update_regulations():
    regulations = {
        "construction": [
            "Work Health and Safety Act 2011 (Cth)",
            f"Updated Building Standards - {datetime.today().strftime('%d/%m/%Y')}"
        ]
    }
    with open('app/lib/regulations.ts', 'w') as f:
        f.write(f"export const nationalRegulations = {json.dumps(regulations, indent=2)};")

if __name__ == "__main__":
    update_regulations()
    print("Regulations updated")
